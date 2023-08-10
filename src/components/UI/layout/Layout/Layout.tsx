import React from 'react'
import * as internalStyle from "./Layout.module.less"

type Props = {
    children?: React.ReactNode,
    style?: React.CSSProperties
}

const Layout: React.FC<Props> = ({ children, style }) => {
  return (
    <div className={internalStyle.wrapper} style={style}>
        {children}
    </div>
  )
}

export default Layout