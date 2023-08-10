import React from 'react'
import * as style from "./Select.module.less"

type Props = {
    children: React.ReactNode,
}

const Select: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Select