import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';

import courier from "./courier/courier.model3.json"

window.PIXI = PIXI

Live2DModel.registerTicker(PIXI.Ticker)

export default function Live2DComponent() {
 
  useEffect(() => {
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      resizeTo: window,
    })
    
    const fetchedModel = Live2DModel.fromSync(courier)

    fetchedModel.once('load', () => {
      
        app.stage.addChild(fetchedModel);

        model.anchor.set(0.5, 0.5);
        model.position.set(window.innerWidth / 2, window.innerHeight / 2);
        model.scale.set(0.1, 0.1);
      })
    

  }, [])

  // async function fetchModel(){
  //   try {
  //     debugger
  //     const model = await Live2DModel.from("./courier/courier.model3.json")

  //     debugger
    
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <canvas id="canvas" />
    </>
  )
};

