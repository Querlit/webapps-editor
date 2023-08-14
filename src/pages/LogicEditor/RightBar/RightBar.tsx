

import React from 'react'

import * as style from "./RightBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'

type Props = {
    className: string
}

const RightBar: React.FC<Props> = ({ className }) => {
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>

        </Layout>
    )
}

export default RightBar