

import React, { useState } from 'react'

import * as style from "./TaskBar.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'
import Button from '../../../components/UI/button/Button/Button'
import Icon from '../../../components/UI/icon/Icon/Icon'
import Title from '../../../components/UI/text/Title/Title'

type Props = {
    className: string
}

const TaskBar: React.FC<Props> = ({ className }) => {

    const [percentage, setPercentage] = useState(100)

    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>

            <div className={style.buttonGroup}>
                <Button>
                    <Icon icon={"ArrowLeftIcon"} />
                </Button>
                <Button disabled>
                    <Icon icon={"ArrowRightIcon"} />
                </Button>
                <Button disabled>
                    <Icon icon={"AttentionIcon"} />
                </Button>
                <Button>
                    <Icon icon={"LockIcon"} />
                </Button>
            </div>

            <div className={style.zoomGroup}>
                <Button onClick={() => setPercentage(percentage-20)}>
                    <Icon icon={"MinusIcon"} />
                </Button>
                <Title fontSize={24} fontWeight={500}>
                    {`${percentage}%`}
                </Title>
                <Button onClick={() => setPercentage(percentage+20)}>
                    <Icon icon={"PlusIcon"} />
                </Button>
            </div>

            <div className={style.buttonGroup}>
                <Button>
                    <Icon icon={"RemoveIcon"} />
                </Button>
                <Button disabled>
                    <Icon icon={"RowVerticalIcon"} />
                </Button>
                <Button disabled>
                    <Icon icon={"RowHorizontalIcon"} />
                </Button>
                <Button disabled>
                    <Icon icon={"TrashIcon"} />
                </Button>
                <Button>
                    <Icon icon={"AddSquareIcon"} />
                </Button>
            </div>

        </Layout>
    )
}

export default TaskBar