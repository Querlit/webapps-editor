import React, { useState } from 'react'
import * as internalStyle from "./ColorPicker.module.less"

type Props = {
  className?: string,
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const ColorPicker: React.FC<Props> = ({ className, style, ...props }) => {
  return (
    <input type="color" className={[internalStyle.wrapper, className].join(" ").trim()} {...props} />
  )
}

export default ColorPicker