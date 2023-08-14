

import React from 'react'

import * as style from "./BlockFeild.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'

type Props = {
    className: string
}

const BlockFeild: React.FC<Props> = ({ className }) => {
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>

        </Layout>
    )
}

export default BlockFeild