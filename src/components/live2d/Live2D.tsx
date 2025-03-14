import { useEffect, useRef, useState } from "react";
import { init } from "l2d";

// https://www.npmjs.com/package/l2d
function Live2D() {
  const l2dRef = useRef<HTMLCanvasElement>(null);
  const model = useRef<any>(null); // Use 'any' to avoid TypeScript errors

  useEffect(() => {
    if (!l2dRef.current) return;

    const l2d = init(l2dRef.current);

    l2d
      .create({
        path: "https://reputablerice.github.io/models/courier.model3.json",
        position: [-100, -300],
        scale: 0.5,
      })
      .then((res) => {
        model.current = res;
      });

    //destroy works  ✅
    // setTimeout(() => {
    //   model.current.destroy()
    //   console.log("destroy model")
    // }, 1000)

    //move center works  ✅
    // setTimeout(() => {
    //   model.current.moveCenter()
    //   console.log("move center model")
    // }, 1000)

    // setParam does not work ❌ Does not recognize setParam 
    // setTimeout(() => {
    //   model.current.setParam("ParamBodyAngleXAUG", 1)
    //   console.log("set Param Angle X to 1")
    // }, 1000)

    // setPosiion works  ✅
    // setTimeout(() => {
    //   model.current.setPosition()
    //   console.log("set Position")
    // }, 1000)

  }, []);

  return (
    <span style={{ width: "100%", height: "100%", position: "absolute", bottom: "0", zIndex: "100" }}>
      <canvas ref={l2dRef} id="l2d" />
    </span>
  );
}

export default Live2D;
