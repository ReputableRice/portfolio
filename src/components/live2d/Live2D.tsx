import { useEffect, useRef, useState } from 'react';
import { init } from 'l2d';
import model from "../../public/courier/courier.model3.json"

// https://www.npmjs.com/package/l2d
function Live2D() {
    const l2dRef = useRef<HTMLCanvasElement>(null);
    const model = useRef<Model>();
    useEffect(() => {
      const l2d = init(l2dRef.current);
      l2d.create({
        path: 'https://reputablerice.github.io/models/courier.model3.json',
        rotaion: 35, 
        position: [200,-500],
        scale: 0.4
      }).then(res => {
        model.current = res;
      });
  
      return () => {
        model.current?.destroy();
      };
    }, []);
    return (
      <div style={{ width: '100%^', height: '1000px'}}>
        <canvas ref={l2dRef}/>
      </div>
    );
}

export default Live2D;