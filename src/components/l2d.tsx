import { useEffect, useRef, useState } from 'react';
import { init } from 'l2d';

function App() {
  const [count, setCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      if (canvasRef.current) {
        const l2d = init(canvasRef.current);
        await l2d.create({
          path: 'https://model.hacxy.cn/cat-black/model.json',
          position: [0, 10],
          scale: 0.1,
        });
        // Additional actions after the model is created can be added here
      }
    };

    loadModel();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="l2d-canvas" width="500" height="500"></canvas>
    </>
  );
}

export default App;
