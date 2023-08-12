import React, { useState } from 'react'
import * as internalStyle from "./Button.module.less"

type Props = {
    children?: React.ReactNode,
    className?: string,
    type?: "button" | "lever",
    style?: React.CSSProperties,
    invisibleBorder?: boolean,
    active?: boolean,
    onClick?: (isActive: boolean) => void,
    disable?: boolean
}

const Button: React.FC<Props> = ({ children, className, style, active=false,
  onClick=()=>{}, type="button", invisibleBorder=false, disable=false}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <button className={[ className, internalStyle.wrapper, isActive || active ? internalStyle.active : "" ].join(" ").trim()} 
      style={{
        ...style,
        border: invisibleBorder ? "none" : "",
        boxShadow: invisibleBorder ? "none" : ""
      }} onClick={() => {
        if (type === "lever") setIsActive(!isActive)
        onClick(isActive)
      }} disabled={disable} >
        {children}
    </button>
  )
}

export type { Props }
export default Button