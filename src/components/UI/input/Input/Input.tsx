import React, { useState } from 'react'
import * as internalStyle from "./Input.module.less"

type Props = {
  placeholder?: string,
  style?: React.CSSProperties,
  className?: string,
  onChange?: (value: string) => void
  invisibleBorder?: boolean
}

const Input: React.FC<Props> = ({ placeholder, style, className, onChange=()=>{}, invisibleBorder=false }) => {
  const [value, setValue] = useState("")
  return (
    <input type="text" className={[internalStyle.wrapper, className].join(" ").trim()} value={value} onChange={(e) => {
      onChange(e.target.value)
      setValue(e.target.value)
    }} placeholder={placeholder} style={{
      ...style,
      "borderColor": invisibleBorder ? "transparent" : undefined
    }}/>
  )
}

export default Input