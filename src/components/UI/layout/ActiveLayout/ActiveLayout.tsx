import React from 'react'
import * as internalStyle from "./ActiveLayout.module.less"

type Type = "active" | "hover"

type Props = {
  children?: React.ReactNode,
  style?: React.CSSProperties,
  type?: Type,
}

const ActiveLayout: React.FC<Props> = ({ children, style, type }) => {
  return (
    <div className={internalStyle.wrapper} style={style}>
        {children}
    </div>
  )
}

export default ActiveLayout