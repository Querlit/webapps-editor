import React from 'react'
import * as style from "./Layout.module.less"

type Props = {
    children: React.ReactNode,
}

const Layout: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default Layout