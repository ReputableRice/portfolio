import { useEffect, useRef, useState } from "react";
import { init } from "l2d";

// https://www.npmjs.com/package/l2d
function Live2D() {
  const l2dRef = useRef<HTMLCanvasElement>(null);
  const model = useRef<any>(null);
  const [glasses, setGlasses] = useState(true)
  const [randomNum, setRandomNum] = useState(0)

  useEffect(() => {
    const l2d = init(l2dRef.current);
    setTimeout(() => {
      l2d
        .create({
          path: "https://reputablerice.github.io/models/courier.model3.json",
          position: [200, -900],
          rotaion: 25,
        })
        .then((res) => {
          model.current = res;
        });
    }, 500)
  }, []);

  function setDefaults() {
    model.current.setParam("Glasses", 0)
    model.current.setParam("Hat", 0)
    model.current.setParam("Plant", 0)
    model.current.setParam("ParamMouthOpenY", 0)
    model.current.setParam("ParamEyeLOpen", 1)
    model.current.setParam("ParamEyeLSmile", 0)
    model.current.setParam("ParamEyeROpen", 1)
    model.current.setParam("ParamEyeRSmile", 0)
    console.log("reset")
  }

  const mouseClick = () => {
    setRandomNum(Math.random() * 10)
    setDefaults()

    if (randomNum == 0) {

    } else if (randomNum < 3) {
      model.current.setParam("Glasses", 1)
      model.current.setParam("ParamMouthOpenY", 1)
      model.current.setParam("ParamEyeLOpen", 0)
      model.current.setParam("ParamEyeLSmile", 1)
      model.current.setParam("ParamEyeROpen", 0)
      model.current.setParam("ParamEyeRSmile", 1)

    } else if (randomNum < 6) {
      model.current.setParam("Hat", 1)
      model.current.setParam("Glasses", 1)
    } else if (randomNum <= 10) {
      model.current.setParam("Hat", 1)
      model.current.setParam("Plant", 1)
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