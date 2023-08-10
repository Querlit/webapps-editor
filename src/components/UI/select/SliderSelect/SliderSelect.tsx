import React from 'react'
import * as style from "./SliderSelect.module.less"

type Props = {
    children: React.ReactNode,
}

const SliderSelect: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default SliderSelect