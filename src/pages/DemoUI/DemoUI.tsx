

import React from 'react'
import * as style from "./DemoUI.module.less"

type Props = {
    children: React.ReactNode,
}

const DemoUI: React.FC<Props> = ({
    children,
}) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}

export default DemoUI