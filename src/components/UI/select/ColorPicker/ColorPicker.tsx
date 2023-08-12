import React, { useState } from 'react'
import * as internalStyle from "./ColorPicker.module.less"

type Props = {
  style?: React.CSSProperties,
  className?: string,
  onChange?: (color: string) => void
}

const ColorPicker: React.FC<Props> = ({ onChange=()=>{}, className, style }) => {
  const [color, setColor] = useState("")
  return (
    <input type="color" value={color} onChange={e => {
      setColor(e.target.value);
      onChange(e.target.value);
    }} className={[internalStyle.wrapper, className].join(" ").trim()} style={style}/>
  )
}

export default ColorPicker