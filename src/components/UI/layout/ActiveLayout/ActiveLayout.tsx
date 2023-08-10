import React from 'react'
import * as style from "./ActiveLayout.module.less"

type Props = {
    children: React.ReactNode,
}

const ActiveLayout: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default ActiveLayout