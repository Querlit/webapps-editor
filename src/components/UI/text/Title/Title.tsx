import React from 'react'
import * as internalStyle from "./Title.module.less"

type Props = {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    fontSize?: 16 | 24 | 32,
    fontWeight?: 300 | 400 | 500 | 600
}

const Title: React.FC<Props> = ({
    children,
    style,
    fontSize = 16,
    fontWeight = 600
}) => {
  return (
    <p className={internalStyle.wrapper} style={{
      ...style, fontSize, fontWeight
    }}>
      {children}
    </p>
  )
}

export default Title