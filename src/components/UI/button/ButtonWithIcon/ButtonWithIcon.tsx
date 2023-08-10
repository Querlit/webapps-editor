import React from 'react'
import * as style from "./ButtonWithIcon.module.less"

type Props = {
    children: React.ReactNode,
}

const ButtonWithIcon: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default ButtonWithIcon