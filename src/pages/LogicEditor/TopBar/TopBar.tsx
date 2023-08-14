

import React from 'react'

import * as style from "./TopBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'
import Button from '../../../components/UI/button/Button/Button'
import Icon from '../../../components/UI/icon/Icon/Icon'
import Title from '../../../components/UI/text/Title/Title'
import SliderSelect from './SliderSelect/SliderSelect'

type Props = {
    className?: string
    projectTitle: string
}

const TopBar: React.FC<Props> = ({ className, projectTitle }) => {
    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            <div className={style.buttonGroup}>
                <Button>
                    <Icon icon={"BackArrowIcon"} />
                </Button>
                <Button>
                    <Icon icon={"SettingsIcon"} />
                </Button>
                <Button>
                    <Icon icon={"QuestionMarkIcon"} />
                </Button>
            </div>

            <Title className={style.label} fontSize={24} fontWeight={500}>
                {projectTitle}
            </Title>

            <SliderSelect optionsList={["Files", "Logic", "Design"]} 
            defaultActiveIndex={1} className={style.selectComponent} 
            invisibleBorder={true}/>

            <div className={style.buttonGroup}>
                <Button>
                    <Icon icon={"SaveIcon"} />
                </Button>
                <Button>
                    <Icon icon={"PresentionIcon"} />
                </Button>
                <Button>
                    <Icon icon={"DownloadIcon"} />
                </Button>
                <Button>
                    <Icon icon={"PlayIcon"} />
                </Button>
            </div>
        </Layout>
    )
}

export default TopBar