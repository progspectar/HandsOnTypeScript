import { useState, useEffect } from "react";

export interface WindowDimension {
  height: number;
  width: number;
}

export const useWindowDimensions = (): WindowDimension => {
  const [dimension, setDimension] = useState<WindowDimension>({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  //an empty array, [], means that this will run only once
  // on first load.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    // when we add an event handler, we must also return
    // an event remover
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
};

export const IsMobileWidth = (): boolean => {
  const { width } = useWindowDimensions();
  if (width <= 768) {
    return true;
  }
  return false;
};

// Then, on line 8, we name our useWindowDimensions Hook. Then, on the next
// line, we create a state object called dimension and give it a value of 0 for height
// and 0 for width.
// 2. Next, we create our handler function, handleResize, which will use the state
// update method, setDimension, to set our dimension values. The window object
// of our browser provides the dimension values.
// 3. Finally, starting no line 21, we use the useEffect Hook to handle the window's
// resize event. Note that an empty array, [], means that this will run only once
// on first load. Also, note that when we add an event handler, we must also return
// an event remover (this prevents memory leaks and redundant event handlers from
// being added).
