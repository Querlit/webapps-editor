import React from 'react'
import * as style from "./Input.module.less"

type Props = {
    children: React.ReactNode,
}

const Input: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Input