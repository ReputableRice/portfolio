import { useEffect, useRef, useState } from 'react';
import { init } from 'l2d';
import model from "../../public/courier/courier.model3.json"

function Live2D() {
    const l2dRef = useRef<HTMLCanvasElement>(null);
    const model = useRef<Model>();
    useEffect(() => {
      const l2d = init(l2dRef.current);
      l2d.create({
        path: 'https://reputablerice.github.io/models/courier.model3.json',
        // path: '/courier_small/courier.model3.json',
      }).then(res => {
        model.current = res;
      });
  
      return () => {
        model.current?.destroy();
      };
    }, []);
    return (
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={l2dRef} />
      </div>
    );
}

export default Live2D;