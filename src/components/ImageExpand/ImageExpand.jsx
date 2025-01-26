import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ImageExpand({ className, alt, src }) {
  return (
    <>
      <Zoom>
        <img
          src={src ? src : "https://placehold.co/600x400"}
          alt={alt}
          className={className}
          onClick={() => setIsEnlarged(!isEnlarged)}
          loading="lazy" decoding="async"
        />
      </Zoom>
    </>
  );
}
