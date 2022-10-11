import { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef();

  const drawRectangle = () => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(50, 30, 110, 90);
    context.strokeRect(170, 65, 100, 80);
  };

  useEffect(() => {
    drawRectangle();
  }, []);

  return (
    <div style={{margin:'60px'}}>
      <canvas
        ref={canvasRef}
        style={{
          width: "600px",
          height: "400px",
          background: "url('./bg-img.jpg')",
        }}
      />
    </div>
  );
}

export default App;
