

import React from 'react'
import * as style from "./DemoUI.module.less"
import Layout from '../../components/UI/layout/Layout/Layout'
import ActiveLayout from '../../components/UI/layout/ActiveLayout/ActiveLayout'

type Props = {
    children?: React.ReactNode,
}


const DemoUI: React.FC<Props> = ({
    children,
}) => {
    return (
        <div className={style.wrapper}>
            <Layout style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <p>Base layout</p>
            </Layout>

            <ActiveLayout type={"active"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <p>Active layout (type = active)</p>
            </ActiveLayout>

            <ActiveLayout type={"hover"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <p>Active layout (type = hover)</p>
            </ActiveLayout>
        </div>
    )
}

export default DemoUI