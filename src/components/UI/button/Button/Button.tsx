import React, { useState } from 'react'
import * as internalStyle from "./Button.module.less"

type Props = {
    children?: React.ReactNode,
    className?: string,
    invisibleBorder?: boolean,
    active?: boolean,
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<Props> = ({ children, className, active=false, invisibleBorder=false, ...props}) => {
  return (
    <div className={[
        internalStyle.wrapper,
        active ? internalStyle.active : "",
        invisibleBorder ? internalStyle.invisibleBorder : ""
      ].join(" ").trim()}>
      <button className={[
          className, 
          internalStyle.button
        ].join(" ").trim()} {...props}>
          {children}
      </button>
    </div>
  )
}

export type { Props }
export default Button