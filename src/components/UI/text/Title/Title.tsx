import React from 'react'
import * as style from "./Title.module.less"

type Props = {
    children: React.ReactNode,
}

const Title: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Title