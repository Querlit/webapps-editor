import React from 'react'
import * as style from "./Text.module.less"

type Props = {
    children: React.ReactNode,
}

const Text: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Text