import React from 'react'
import * as internalStyle from "./Layout.module.less"

type Props = {
    children?: React.ReactNode,
    style?: React.CSSProperties
    className?: string
}

const Layout: React.FC<Props> = ({ children, style, className }) => {
  return (
    <div className={[internalStyle.wrapper, className].join(" ")} style={style}>
        {children}
    </div>
  )
}

export default Layout