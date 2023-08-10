import React from 'react'
import * as style from "./Icon.module.less"

type Props = {
    children: React.ReactNode,
}

const Icon: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Icon