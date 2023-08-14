

import React from 'react'

import * as style from "./RightBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'
import ListElement from './ListElement/ListElement'

type Props = {
    className: string
}

const RightBar: React.FC<Props> = ({ className }) => {
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            <ListElement title='Name'/>
            <ListElement title='Orientation'/>
            <ListElement title='Width'/>
            <ListElement title='Height'/>
            <ListElement title='Border'/>
        </Layout>
    )
}

export default RightBar