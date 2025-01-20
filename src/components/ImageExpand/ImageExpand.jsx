import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";

export default function ImageExpand({ styleProps, nameProps, linkProps }) {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [imgStyle, setImgStyle] = useState()
  const [container, setContainer] = useState("")

  useEffect(() => {
    if (isEnlarged) {
      setImgStyle("h-svh z-50 sticky")
      setContainer("bg-opacity-75 absolute h-full w-full bg-slate-900 z-50 top-0 flex items-center justify-center")
    } else {
      setImgStyle(styleProps)
      setContainer("")
    } 
  }, [isEnlarged])

  return (
    <>
      <div className={container}>
        <img
          src={linkProps ? linkProps : "https://placehold.co/600x400"}
          alt={nameProps}
          className={imgStyle}
          onClick={() => setIsEnlarged(!isEnlarged)}
          loading="lazy" decoding="async"
        />
      </div>
    </>
  );
}
