

import React from 'react'
import * as style from "./DemoUI.module.less"

import Layout from '../../components/UI/layout/Layout/Layout'
import ActiveLayout from '../../components/UI/layout/ActiveLayout/ActiveLayout'
import Button from '../../components/UI/button/Button/Button'
import Icon from '../../components/UI/icon/Icon/Icon'
import ButtonWithIcon from '../../components/UI/button/ButtonWithIcon/ButtonWithIcon'
import Text from '../../components/UI/text/Text/Text'
import Title from '../../components/UI/text/Title/Title'
import ColorPicker from '../../components/UI/select/ColorPicker/ColorPicker'
import Input from '../../components/UI/input/Input/Input'

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
                <Title>Base layout</Title>
            </Layout>

            {/* 3 types of active layout */}
            <ActiveLayout type={"disabled"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Title>Active layout (type = disabled)</Title>
            </ActiveLayout>

            <ActiveLayout type={"hover"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Title>Active layout (type = hover)</Title>
            </ActiveLayout>

            <ActiveLayout type={"active"} style={{
                height: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Title>Active layout (type = active)</Title>
            </ActiveLayout>

            {/* Items list of Active Layouts */}
            <Layout className={style.buttonList} style={{
                width: "auto"
            }}>
                <Layout className={style.interactiveList}>
                <Title>Список</Title>
                    {itemsList.map(item => (
                        <ActiveLayout key={item.id} type={"hover"} style={{
                            width: "100%",
                            height: "auto"
                        }}>
                            <Text>{item.title}</Text>
                        </ActiveLayout>
                    ))}
                </Layout>

                <Layout className={style.interactiveList} style={{
                    width: "auto",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"
                }}>
                    {/* Item list of Buttons */}
                    <Layout className={style.buttonList}>
                        <Title>Конпки</Title>
                        {itemsList.map(item => (
                            <Button key={item.id} type={"lever"}>
                                <Text>{item.title}</Text>
                            </Button>
                        ))}
                    </Layout>

                    <Layout className={style.buttonList}>
                        <Title>Иконки</Title>
                        <Icon icon="ArrowIcon"/>
                        <Icon icon="ArrowLeftIcon" />
                        <Icon icon="CloudIcon" />
                        <Icon icon="DownloadIcon" />
                        <Icon icon="MouseIcon" />
                        <Icon icon="SaveIcon" />
                    </Layout>

                    <Layout className={style.buttonList}>
                        <ButtonWithIcon icon="ArrowIcon" iconSize={24} type={"lever"} />
                        <ButtonWithIcon icon="ArrowLeftIcon" iconSize={24} />
                        <ButtonWithIcon icon="CloudIcon" iconSize={24} />
                        <ButtonWithIcon icon="DownloadIcon" iconSize={24} />
                        <ButtonWithIcon icon="MouseIcon" iconSize={24} />
                        <ButtonWithIcon icon="SaveIcon" iconSize={24} />
                    </Layout>
                </Layout>
            </Layout>

            <ColorPicker onChange={color => {
                console.log(color);
            }}/>

            <Layout className={style.buttonList}>
                <Input placeholder='Имя'/>
                <Input placeholder='Фамилия'/>
                <ButtonWithIcon icon="InputIcon" />
            </Layout>
        </div>
    )
}

export default DemoUI