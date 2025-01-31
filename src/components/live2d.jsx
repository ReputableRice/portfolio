import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';

export default function Live2DComponent() {
  useEffect(() => {
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      resizeTo: window,
    })

    Live2DModel.from('/courier/courier.model3.json').then((model) => {
      app.stage.addChild(model)

      model.anchor.set(0.5, 0.5)
      model.position.set(window.innerWidth / 2, window.innerHeight / 2)
      model.scale.set(0.1, 0.1)

      model.on('hit', () => {
        model.motion('Tap@Body')
      })
    })
  }, [])


  return <canvas id="canvas" />
};

