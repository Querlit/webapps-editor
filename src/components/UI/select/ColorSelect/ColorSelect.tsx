import React from 'react'
import * as style from "./ColorSelect.module.less"

type Props = {
    children: React.ReactNode,
}

const ColorSelect: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default ColorSelect