import { useEffect, useRef } from "react";
import * as styles from "./floating_collage.module.css";

export const FloatingCollage = ({ sceneItems }) => {
  const canvasRef = useRef(null);
  const collageSceneRef = useRef<CollageScene>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set the scene
    const scene = new CollageScene(canvasRef.current, sceneItems);
    collageSceneRef.current = scene;

    // Start animation sequence
    collageSceneRef.current.start();

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    canvasRef.current.style.width = `${canvasRef.current.width}px`;
    canvasRef.current.style.height = `${canvasRef.current.height}px`;

    window.addEventListener("resize", () => {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.style.width = `${canvasRef.current.width}px`;
      canvasRef.current.style.height = `${canvasRef.current.height}px`;
    });
  }, [sceneItems]);

  //

  return <canvas ref={canvasRef} className={styles.wrapper} />;
};

// Control animation behavour and location of elements on screen
class CollageScene {
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  sceneItems: CollageItem[] = [];
  constructor(canvas: HTMLCanvasElement, sceneItems: string[]) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    const sizeArray = [16, 32, 64];
    // Create collage items
    for (const item of sceneItems) {
      if (!item) continue;
      // Get random size
      const randSize = Math.floor(Math.random() * 3);

      // Push items onto scene object
      this.sceneItems.push(new CollageItem(item, sizeArray[randSize], null));
    }

    // Place items on scene
    if (this.sceneItems.length === 0) return;
    this.placeItems();
  }

  // Start animation loop
  start() {
    // Add a growing and shrinking, randomly timed
    for (let item of this.sceneItems) {
      const scales = [];
      const directions = [];

      const minSize = 16;
      const maxSize = 64;
      const amplitude = (maxSize - minSize) / 2;
      const midpoint = minSize + amplitude;

      // Initialize scale and direction for each item
      for (let i = 0; i < this.sceneItems.length; i++) {
        scales[i] = 1;
        directions[i] = Math.random() < 0.5 ? 1 : -1;
      }

      const animateAll = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.sceneItems.length; i++) {
          const item = this.sceneItems[i];
          const scale = scales[i];
          const direction = directions[i];

          const currentSize = midpoint + amplitude * Math.cos(scale);

          this.ctx.drawImage(
            item.img,
            item.imgPosition.x - currentSize / 2,
            item.imgPosition.y - currentSize / 2,
            currentSize,
            currentSize
          );

          // Update scale for next frame
          scales[i] += Math.random() * 0.02 * direction;
        }

        requestAnimationFrame(animateAll);
      };

      animateAll();
    }
  }

  // Place items on scene
  placeItems() {
    if (!this.sceneItems) return;

    const canvasBoundingBox = this.canvas?.getBoundingClientRect();

    for (let index = 0; index < this.sceneItems.length; index++) {
      let randX: number = 0;
      let randY: number = 0;
      const sceneItem = this.sceneItems[index];
      // Determine bounding box. Continue until no collision detected
      while (true) {
        // Get random point on canvas screen
        [randX, randY] = generateRandomPoint(canvasBoundingBox);

        // Bring x point close into canvas
        if (
          randX + sceneItem.defaultSize >
          canvasBoundingBox.right - canvasBoundingBox.x
        ) {
          console.log(
            randX + sceneItem.defaultSize,
            canvasBoundingBox.right - canvasBoundingBox.x
          );
          randX -= sceneItem.defaultSize * 1.5;
        }
        if (randX - sceneItem.defaultSize < sceneItem.defaultSize) {
          randX += sceneItem.defaultSize * 1.5;
        }

        //Bring y point close into canvas
        if (
          randY + sceneItem.defaultSize >
          canvasBoundingBox.bottom - canvasBoundingBox.y
        ) {
          randY -= sceneItem.defaultSize * 1.5;
        }
        if (randY - sceneItem.defaultSize < sceneItem.defaultSize) {
          randY += sceneItem.defaultSize * 1.5;
        }

        // Correct for falling outside boundary
        const boundingBox: BoundingBox = {
          topLeft: {
            x: randX - sceneItem.defaultSize / 2,
            y: randY - sceneItem.defaultSize / 2,
          },
          bottomRight: {
            x: randX + sceneItem.defaultSize / 2,
            y: randY + sceneItem.defaultSize / 2,
          },
        };

        let collision = false;
        collision = this.sceneItems.some((nextItem, i) => {
          if (index === i) return false;
          return nextItem.isCollision(boundingBox);
        });

        if (!collision) {
          sceneItem.setBoundingBox(boundingBox);
          break;
        }
      }

      const img = new Image();
      sceneItem.setImage(img, randX, randY);

      img.src = sceneItem?.itemPath ?? "";
      // Fetch image
      img.onload = () => {
        // Set item on scene
        this.ctx?.drawImage(
          img,
          randX,
          randY,
          sceneItem.defaultSize,
          sceneItem.defaultSize
        );
      };
    }
  }
}

type BoundingBox = {
  topLeft: { x: number; y: number };
  bottomRight: { x: number; y: number };
};

class CollageItem {
  itemPath: string | null = null;
  // Any number between 16x16, 32x32 or 64x64
  defaultSize: number = 16;
  imgPosition: {
    x: number;
    y: number;
  } | null = null;
  boundingBox: BoundingBox | null;
  img: null | HTMLImageElement = null;
  constructor(itemPath: string, defaultSize: number, boundingBox: BoundingBox) {
    this.itemPath = itemPath;
    this.defaultSize = defaultSize;
    this.boundingBox = boundingBox;
  }

  // Check whethe incoming bounding box overlaps with this item's box using AABB overlap formula
  isCollision(boundingCoords: BoundingBox): boolean {
    if (!this.boundingBox) return false;
    if (
      /* Determine overlap on y axis */

      // X-axis overlap
      boundingCoords.topLeft.x < this.boundingBox.bottomRight.x &&
      boundingCoords.bottomRight.x > this.boundingBox.topLeft.x &&
      // Y-axis overlap
      boundingCoords.topLeft.y < this.boundingBox.bottomRight.y &&
      boundingCoords.bottomRight.y > this.boundingBox.topLeft.y
    ) {
      return true;
    }

    return false;
  }

  setBoundingBox(boundingBox: BoundingBox) {
    this.boundingBox = boundingBox;
  }

  setImage(img: HTMLImageElement, x: number, y: number) {
    this.img = img;
    this.imgPosition = {
      x,
      y,
    };
  }
}

const generateRandomPoint = (boundingBox: DOMRect) => {
  const xRange = boundingBox.right - boundingBox.left;
  const yRange = boundingBox.bottom - boundingBox.top;

  // Get some fraction of y range and subtract from bottom y position
  const bottomYNew =
    boundingBox.bottom - Math.random() * yRange - boundingBox.y;
  const xNew = boundingBox.right - Math.random() * xRange - boundingBox.x;

  // Subtract initial bounding box start position to bring range coords into view

  return [xNew, bottomYNew];
};
