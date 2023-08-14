

import React from 'react'
import * as Logo from "~/src/assets/se-logo.png"

import * as style from "./LogicEditor.module.less"
import TopBar from './TopBar/TopBar'
import LeftFeildBar from './LeftFeildBar/LeftFeildBar'
import TaskBar from './TaskBar/TaskBar'
import RightFeildBar from './RightFeildBar/RightFeildBar'
import LeftBar from './LeftBar/LeftBar'
import BlockFeild from './BlockFeild/BlockFeild'
import RightBar from './RightBar/RightBar'

type Props = {

}

const LogicEditor: React.FC<Props> = ({}) => {
    return (
        <div className={style.wrapper}>
            <TopBar className={style.topBar} />
            <LeftFeildBar className={style.leftFeildBar} iconsList={["ComponentIcon", "LayersIcon", "AnchorIcon", "SLetterIcon"]} />
            <TaskBar className={style.taskBar} />
            <RightFeildBar className={style.rightFeildBar} text='Hero' icon="RowVerticalIcon" />
            <LeftBar className={style.leftBar} />
            <BlockFeild className={style.blockFeild} />
            <RightBar className={style.rightBar} />
        </div>
    )
}

export default LogicEditor