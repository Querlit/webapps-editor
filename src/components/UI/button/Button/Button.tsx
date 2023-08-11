import React, { useState } from 'react'
import * as internalStyle from "./Button.module.less"

type Props = {
    children?: React.ReactNode,
    className?: string,
    active?: boolean,
    style?: React.CSSProperties
}

const Button: React.FC<Props> = ({
    children,
    className,
    active,
    style
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <button className={[
      internalStyle.wrapper,
      isActive ? internalStyle.active : ""
    ].join(" ").trim()} style={style} onClick={() => setIsActive(!isActive)}>
        {children}
    </button>
  )
}

export default Button