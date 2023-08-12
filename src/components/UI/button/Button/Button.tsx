import React, { useState } from 'react'
import * as internalStyle from "./Button.module.less"

type Props = {
    children?: React.ReactNode,
    className?: string,
    type?: "button" | "lever",
    style?: React.CSSProperties,
    invisibleBorder?: boolean,
    onClick?: (isActive: boolean) => {},
}

const Button: React.FC<Props> = ({ children, className, style, onClick=()=>{}, type="button", invisibleBorder=false, }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <button className={[ className, internalStyle.wrapper, isActive ? internalStyle.active : "" ].join(" ").trim()} 
      style={{
        ...style,
        // borderColor: invisibleBorder ? "transparent" : ""
      }} onClick={() => {
        if (type === "lever") setIsActive(!isActive)
        onClick(isActive)
      }}
      >
        {children}
    </button>
  )
}

export type { Props }
export default Button