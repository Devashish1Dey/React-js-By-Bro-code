import React, { useEffect, useState } from "react";

const App = () => {
  // useEffects(()=>{},[])

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added")
    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("Event Listener Removed")
    }
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} X ${height}`
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
};

export default App;
