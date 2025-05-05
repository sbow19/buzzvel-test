/**
 *  Keep track of screen width when resized.
 */

import { useEffect, useState } from "react";

const useResize = () => {
  const [screenWidth, setScreenWidth] = useState(393);
  useEffect(() => {
    // Check if rendering context if frontend
    if (!window) return;

    const reSize = ()=>{
        setScreenWidth(window.innerWidth)
    }

    // Set initial value
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", reSize);

    return ()=>{
        if(!window)return
        window.removeEventListener("resize",reSize)
    }
  }, []);

  return screenWidth
};

export default useResize;
