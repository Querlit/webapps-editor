

import React, { useEffect, useState } from 'react'

import * as style from "./BlockFeild.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'

import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'

import CommonDraggable from '../../../components/LogicBlocks/CommonDraggable/CommonDraggable'
import CommonDroppable from '../../../components/LogicBlocks/CommonDroppable/CommonDroppable'
import InvidibleDroppable from '../../../components/LogicBlocks/InvidibleDroppable/InvidibleDroppable'

import { useDispatch, useSelector } from 'react-redux'
import { startDragging, stopDragging } from '../../../store/reducers/activeBlockSlice'
import { RootState } from '../../../store/store'
import { DroppableLocatorType } from '../../../types/LogicEditorTypes/DragAndDrop'
import { dragBlock, setupBlocks } from '../../../store/reducers/blockStructureSlice'

type Props = {
    className: string
}

const BlockFeild: React.FC<Props> = ({ className }) => {

    // const [ BlocksScript, setBlockScript ] = useState(loadBlocks)
    const { blocks: BlocksScript, config} = useSelector((state: RootState) => state.blockStructure)
    // const [ , forceRender ] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setupBlocks([
            [
                {
                    value: "Hello",
                    type: "string"
                },
                {
                    value: "Hello",
                    type: "string"
                },
                {
                    value: "Hello",
                    type: "string"
                },
            ]
        ]))
    }, [])

    function handleDragEnd(event: DragEndEvent) {
        dispatch(stopDragging())
        if (!event.over) return

        const targetId = event.active.id as number
        const targetPalceData = event.over?.data.current as DroppableLocatorType

        // setBlockScript(value => moveBlock(value, BlockId, placeData))
        dispatch(dragBlock({ targetId, targetPalceData }))
    }

    const onDragStart = (event: DragStartEvent) => dispatch(startDragging(event.active.id as number))

    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            <DndContext onDragEnd={handleDragEnd} onDragStart={onDragStart}>
                { BlocksScript !== null &&  BlocksScript.map((BlockLine, lineIndex) => (
                    <React.Fragment key={`column-${lineIndex}`}>
                        <InvidibleDroppable direction='column' row={null} column={lineIndex} key={`c-n-${lineIndex}`} />
                        <div className={style.blockline} key={`blockline-${lineIndex}`}>
                            { BlockLine.map((Block, blockIndex) => (
                                <React.Fragment key={`row-${blockIndex}`}>
                                    <InvidibleDroppable direction='row' row={blockIndex} column={lineIndex} key={`r-${blockIndex}-${lineIndex}`}/>
                                    <CommonDraggable
                                        contains={[ Block.value ]}
                                        id={Block.id || 0}
                                        key={Block.id}
                                    />
                                </React.Fragment>
                            )) }
                            <InvidibleDroppable direction='row' row={null} column={lineIndex} key={`r-c-${lineIndex}`}/> { /* last invisible droppable in row */ }
                        </div>
                    </React.Fragment>
                )) }
                <InvidibleDroppable direction='column' row={null} column={null} /> { /* last invisible droppable in column */ }
            </DndContext>
        </Layout>
    )
}

export default BlockFeild