import { useEffect } from "react";
import { Live2DModel } from "pixi-live2d-display";
import * as PIXI from "pixi.js";

export default function Illustrations({ projects, illustrations }) {
   
    useEffect(() => {
        const app = new PIXI.Application({
            view: document.getElementById("canvas"),
            autoStart: true,
            resizeTo: window,
        });

        Live2DModel.from("/live2d-models/VeeEsque/Vee Esque.model3.json").then((model) => {
            app.stage.addChild(model);
            model.anchor.set(0.5, 0.5);
            model.position.set(window.innerWidth / 2, window.innerHeight / 2);
            model.scale.set(0.1, 0.1);

            model.on("hit", () => {
                model.expression("f05");
            });

            const handleResize = () => {
                model.position.set(window.innerWidth / 2, window.innerHeight / 2);
                model.scale.set(0.1, 0.1);
            };

            window.addEventListener("resize", handleResize);

            // Cleanup
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        });
    }, []);

    return (
        <>
            <canvas id="canvas" />
        </>
    );
}
