

import React from 'react'

import * as style from "./LeftBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'
import SearchInput from '../../../components/UI/input/SearchInput/SearchInput'

type Props = {
    className: string
}

const LeftBar: React.FC<Props> = ({ className }) => {
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            <SearchInput />
        </Layout>
    )
}

export default LeftBar