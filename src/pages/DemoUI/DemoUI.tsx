

import React from 'react'
import * as style from "./DemoUI.module.less"

import Layout from '../../components/UI/layout/Layout/Layout'
import ActiveLayout from '../../components/UI/layout/ActiveLayout/ActiveLayout'
import Button from '../../components/UI/button/Button/Button'

type Props = {
    children?: React.ReactNode,
}

const itemsList: {title: string, id: number}[] = [
    {
        title: "Hello",
        id: 0
    },
    {
        title: "World",
        id: 0
    },
    {
        title: "I am",
        id: 0
    },
    {
        title: "Developer",
        id: 0
    },
]

itemsList.forEach(item => {
    item.id = Math.floor(Math.random() * 10000)
})


const DemoUI: React.FC<Props> = ({
    children,
}) => {
    return (
        <div className={style.wrapper}>

            {/* Base Layout */}
            <Layout style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <p>Base layout</p>
            </Layout>

            {/* 3 types of active layout */}
            <ActiveLayout type={"disabled"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <p>Active layout (type = disabled)</p>
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

            <ActiveLayout type={"active"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <p>Active layout (type = active)</p>
            </ActiveLayout>

            {/* Items list of Active Layouts */}
            <Layout className={style.interactiveList}>
                {itemsList.map(item => (
                    <ActiveLayout key={item.id} type={"hover"} style={{
                        width: "100%",
                        height: "auto"
                    }}>
                        {item.title}
                    </ActiveLayout>
                ))}
            </Layout>

            {/* Item list of Buttons */}
            <Layout className={style.buttonList}>
                {itemsList.map(item => (
                    <Button key={item.id} style={{}}>
                        {item.title}
                    </Button>
                ))}
            </Layout>
        </div>
    )
}

export default DemoUI