import { useEffect, useRef } from "react";
import * as styles from "./floating_collage.module.css";
import useResize from "@/hooks/useResize";

export const FloatingCollage = ({ sceneItems }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const collageSceneRef = useRef<CollageScene>(null);

  const observerRef = useRef<IntersectionObserver>(null);

  const handleAnimation = (entries) => {
    for (const entry of entries) {
      if (!collageSceneRef.current) return;
      if (entry.isIntersecting) {
        collageSceneRef.current.start();
      } else {
        collageSceneRef.current.stop();
      }
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleAnimation, {
        threshold: 0.25,
      });

      //Watch canvas appearing in viewport to trigger animation
      observerRef.current.observe(canvasRef.current);
    }
    // Set the scene
    const scene = new CollageScene(canvasRef.current, sceneItems);
    collageSceneRef.current = scene;

    // Get graphics container size
    const graphicsContainer = document.getElementById(
      "graphics_container_t"
    ) as HTMLDivElement;

    if (!graphicsContainer) return;

    canvasRef.current.width = graphicsContainer.clientWidth;
    canvasRef.current.height = graphicsContainer.clientHeight;
    canvasRef.current.style.width = `${canvasRef.current.width}px`;
    canvasRef.current.style.height = `${canvasRef.current.height}px`;

    window.addEventListener("resize", () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = graphicsContainer.clientWidth;
      canvasRef.current.height = graphicsContainer.clientHeight;
      canvasRef.current.style.width = `${canvasRef.current.width}px`;
      canvasRef.current.style.height = `${canvasRef.current.height}px`;
      collageSceneRef.current?.resize();
    });

    return () => {
      if (collageSceneRef.current) {
        collageSceneRef.current = null;
      }
    };
  }, []);

  const screenWidth = useResize()
  useEffect(()=>{
    if(!collageSceneRef.current) return
    collageSceneRef.current.resize()
  }, [screenWidth])

  return <canvas ref={canvasRef} className={styles.wrapper} />;
};

// Control animation behavour and location of elements on screen
type SourceItem = {
  src: "";
  type: "";
};
class CollageScene {
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  sceneItems: CollageItem[] = [];
  animationId: number | null = null;
  scales: number[] = [];
  directions: number[] = [];
  windowWidth: number  = 0

  constructor(canvas: HTMLCanvasElement, sceneItems: SourceItem[]) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    const sizeArray = [16, 32, 48];
    // Create collage items
    for (const item of sceneItems) {
      if (!item) continue;
      // Get random size
      const randSize = Math.floor(Math.random() * 3);

      // Push items onto scene object
      this.sceneItems.push(
        new CollageItem(item.src, item.type, sizeArray[randSize], null)
      );
    }

    // Place items on scene
    if (this.sceneItems.length === 0) return;
    this.placeItems();

    // Set window width
    this.windowWidth = window.innerWidth
  }

  // Restart animation on resize
  resize() {

    // Check if resize crossed boundary
    const width = window.innerWidth;

    // If the resizing crossed the 960 threshold, trigger resize
    if(width < 960 && this.windowWidth >= 960){
      this.placeItems()
    } else if (width >= 960 && this.windowWidth < 960){
      this.placeItems()
    }

    this.windowWidth = width 
  }

  // Start animation loop
  start() {
    for (const item of this.sceneItems) {
      // Initialize scale and direction of scaling for each item
      for (let i = 0; i < this.sceneItems.length; i++) {
        this.scales[i] = 1;
        this.directions[i] = Math.random() < 0.5 ? 1 : -1;
      }
    }

    // start animation for all items
    const animateAll = () => {
      // Clear context for next render cycle
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const minSize = 16;
      const maxSize = 64;
      const amplitude = (maxSize - minSize) / 2;
      const midpoint = minSize + amplitude;

      for (let i = 0; i < this.sceneItems.length; i++) {
        const item = this.sceneItems[i];
        const scale = this.scales[i];
        const direction = this.directions[i];

        const currentSize = midpoint + amplitude * Math.cos(scale);

        this.ctx.drawImage(
          item.img,
          item.imgPosition.x - currentSize / 2,
          item.imgPosition.y - currentSize / 2,
          currentSize,
          currentSize
        );

        // Update scale for next frame
        this.scales[i] += Math.random() * 0.02 * direction;
      }

      // Store animation ids to pause and start on demand
      this.animationId = requestAnimationFrame(animateAll);
    };

    // Start all animations
    animateAll();
  }

  // Stop animation loop
  stop() {
    if (!this.animationId) return;
    cancelAnimationFrame(this.animationId);
  }

  /**
   * Determine the places of the items on the canvas, taking into account
   * the size of the canvas and avoiding overlap with other items as much
   * as possible.
   */
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
          randX -= sceneItem.defaultSize / 2;
        }
        if (randX - sceneItem.defaultSize < sceneItem.defaultSize) {
          randX += sceneItem.defaultSize / 2;
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

      if (sceneItem.img) {
        sceneItem.setImagePosition(randX, randY);
        this.ctx?.drawImage(
          sceneItem.img,
          randX,
          randY,
          sceneItem.defaultSize,
          sceneItem.defaultSize
        );
      }
      const img = new Image();
      sceneItem.setImage(img);
      sceneItem.setImagePosition(randX, randY);
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
  itemType: string = "";
  // Any number between 16x16, 32x32 or 64x64
  defaultSize: number = 16;
  imgPosition: {
    x: number;
    y: number;
  } | null = null;
  boundingBox: BoundingBox | null;
  img: null | HTMLImageElement = null;
  constructor(
    itemPath: string,
    itemType: string,
    defaultSize: number,
    boundingBox: BoundingBox
  ) {
    this.itemPath = itemPath;
    this.defaultSize = defaultSize;
    this.boundingBox = boundingBox;
    this.itemType = itemType;
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

  setImage(img: HTMLImageElement) {
    this.img = img;
  }

  setImagePosition(x: number, y: number) {
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
