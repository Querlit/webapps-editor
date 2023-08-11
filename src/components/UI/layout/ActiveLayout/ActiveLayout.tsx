import React, { useState } from 'react'
import * as internalStyle from "./ActiveLayout.module.less"

type Type = "active" | "hover" | "disabled"

type Props = {
  children?: React.ReactNode,
  style?: React.CSSProperties,
  type?: Type,
}

const ActiveLayout: React.FC<Props> = ({ children, style, type }) => {

  return (
    <div 
      className={[
        internalStyle.wrapper,
        type === "hover" ? internalStyle.hover : "",
        type === "active" ? internalStyle.active : ""
      ].join(' ').trim()}
      style={style}
      >
        {children}
    </div>
  )
}

export default ActiveLayout