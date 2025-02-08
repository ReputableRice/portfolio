import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ImageExpand({ className, alt, src }) {
  const handleContextMenu = (e) => e.preventDefault();

  return (
    <>
      <Zoom onContextMenu={handleContextMenu}>
        <img
          src={src ? src : "https://placehold.co/600x400"}
          alt={alt}
          className={className}
          loading="lazy" decoding="async"
          onContextMenu={handleContextMenu}

        />
      </Zoom>
    </>
  );
}