

import React from 'react'

import * as style from "./ListElement.module.less"
import Text from '../../../../components/UI/text/Text/Text'
import Input from '../../../../components/UI/input/Input/Input'

type Props = {
    className?: string
    title: string
}

const ListElement: React.FC<Props> = ({ className, title }) => {
    return (
        <div className={[style.wrapper, className].join(" ").trim()}>
            <Text>{title}:</Text>
            <Input />
        </div>
    )
}

export default ListElement