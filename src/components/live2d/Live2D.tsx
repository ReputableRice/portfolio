import { useEffect, useRef, useState } from "react";
import { init } from "l2d";

// https://www.npmjs.com/package/l2d
function Live2D() {
  const l2dRef = useRef<HTMLCanvasElement>(null);
  const model = useRef<any>(null); // Use 'any' to avoid TypeScript errors
  const [glasses, setGlasses] = useState(true)

  useEffect(() => {
    const l2d = init(l2dRef.current);
    setTimeout(() => {
      l2d
        .create({
          path: "https://reputablerice.github.io/models/courier.model3.json",
          position: [200, -900],
          // position: [0, 0],
          rotaion: 25,
          // anchor: [-100, 100]
        })
        .then((res) => {
          model.current = res;
        });
    }, 500)
  }, []);

  const mouseClick = () => {
    setGlasses(!glasses)

    if (glasses) {
      model.current.setParam("Glasses", 0)
    } else {
      model.current.setParam("Glasses", 1)
    }
  };

  return (
    <span style={{ width: "100%", height: "100%", position: "absolute", bottom: "0", zIndex: "100", cursor: "pointer" }}>
      <canvas ref={l2dRef} id="l2d" onClick={mouseClick} />
    </span>
  );
}

export default Live2D;

//L2D package notes

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

// setParam does not work ❌ Does not recognize setParam as a function
// NEW NOTE 03/15: l2d does work well with react (useEffect particularly) since the model needs to be rendered after, which breaks the functions since they are rendered first but can't find the model. So it does work just weird✅
// setTimeout(() => {
//   model.current.setParam("ParamBodyAngleXAUG", 1)
//   console.log("set Param Angle X to 1")
// }, 1000)

// setPosiion works  ✅
// setTimeout(() => {
//   model.current.setPosition()
//   console.log("set Position")
// }, 1000)