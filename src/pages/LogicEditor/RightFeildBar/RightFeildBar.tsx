

import React from 'react'

import * as style from "./RightFeildBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'
import Icon from '../../../components/UI/icon/Icon/Icon'

import type { IconsType } from '../../../components/UI/icon/Icon/type'
import Title from '../../../components/UI/text/Title/Title'

type Props = {
    className?: string
    icon: IconsType,
    text: string,
}

const RightFeildBar: React.FC<Props> = ({ className, icon, text }) => {
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            <Icon icon={icon} />
            <Title fontSize={32} fontWeight={500}>{text}</Title>
        </Layout>
    )
}

export default RightFeildBar