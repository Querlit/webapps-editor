

import React, { useState } from 'react'

import * as style from "./LeftFeildBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'

import type { IconsType } from '../../../components/UI/icon/Icon/type'
import Button from '../../../components/UI/button/Button/Button'
import Icon from '../../../components/UI/icon/Icon/Icon'

type Props = {
    className?: string,
    iconsList?: IconsType[],
    defaultIconIndex?: number,
    onChange?: (index: number) => void
}

const LeftFeildBar: React.FC<Props> = ({ className, iconsList=[], defaultIconIndex=0, onChange=()=>{} }) => {
    const [active, setActive] = useState(defaultIconIndex)
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            { iconsList.map((icon, index) => (
                <Button active={active === index} onClick={() => {
                    setActive(index)
                    onChange(index)
                }}>
                    <Icon icon={icon} style={{height: active === index ? 24 : 28, width: active === index ? 24 : 28}}/>
                </Button>
            )) }
        </Layout>
    )
}

export default LeftFeildBar