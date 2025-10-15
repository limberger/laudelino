

//import React, { useState, type ReactNode } from 'react';

import { useState, type ReactNode } from "react";

interface HoverComponentProps {
  children: ReactNode,   // valor
  img_src: string        // imagem a ser exibida no hover

}

export function HoverComponent({children, img_src}:HoverComponentProps) {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
       >

      {children}
      {isHovering && (
        <div>
          <img src={img_src}/>
        </div>
      )}

    </div>
  )
}
