import React from 'react'
import * as style from "./Button.module.less"

type Props = {
    children: React.ReactNode,
}

const Button: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Button