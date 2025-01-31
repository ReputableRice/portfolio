// src/Live2DViewer.tsx
import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import Live2DModel from "pixi-live2d-display";

// Ensure PIXI is globally available for Live2D
window.PIXI = PIXI;

const Live2DViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return; // Ensure canvas exists before initializing

    const app = new PIXI.Application({
      view: canvasRef.current,
      autoStart: true,
      resizeTo: window,
    });

    Live2DModel.from("/courier/courier.model3.json").then((model) => {
      app.stage.addChild(model);
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.3, 0.3);

      model.on("hit", () => {
        model.motion("Tap@Body");
      });
    });

    return () => app.destroy(true, { children: true }); // Cleanup when unmounting
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Live2DViewer;
