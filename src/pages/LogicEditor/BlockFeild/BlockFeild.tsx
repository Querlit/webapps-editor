

import React, { useState } from 'react'

import * as style from "./BlockFeild.module.less"

import Layout from '../../../components/UI/layout/Layout/Layout'

import { DndContext, DragEndEvent } from '@dnd-kit/core'

import CommonDraggable from '../../../components/LogicBlocks/CommonDraggable/CommonDraggable'
import CommonDroppable from '../../../components/LogicBlocks/CommonDroppable/CommonDroppable'
import InvidibleDroppable, { DroppableData } from '../../../components/LogicBlocks/InvidibleDroppable/InvidibleDroppable'

import { loadBlocks, moveBlock } from '../../../components/lib/LogicEditorScripts/loadBlocks'

type Props = {
    className: string
}

const BlockFeild: React.FC<Props> = ({ className }) => {

    const [ BlocksScript, setBlockScript ] = useState(loadBlocks)
    const [ , forceRender ] = useState({})

    function handleDragEnd(event: DragEndEvent) {
        if (!event.over) return

        const BlockId = event.active.id as number
        const placeData = event.over?.data.current as DroppableData

        setBlockScript(value => moveBlock(value, BlockId, placeData))
        forceRender({})
    }

    return (
        <Layout className={[style.wrapper, className].join(" ").trim()}>
            <DndContext onDragEnd={handleDragEnd}>
                { BlocksScript.map((BlockLine, lineIndex) => (
                    <>
                        <InvidibleDroppable direction='column' row={null} column={lineIndex} key={`c-n-${lineIndex}`} />
                        <div className={style.blockline}>
                            { BlockLine.map((Block, blockIndex) => (
                                <>
                                    <InvidibleDroppable direction='row' row={blockIndex} column={lineIndex} key={`r-${blockIndex}-${lineIndex}`}/>
                                    <CommonDraggable
                                        contains={[ Block.value ]}
                                        id={Block.id || 0}
                                    />
                                </>
                            )) }
                            <InvidibleDroppable direction='row' row={null} column={lineIndex} key={`r-c-${lineIndex}`}/> { /* last invisible droppable in row */ }
                        </div>
                    </>
                )) }
                <InvidibleDroppable direction='column' row={null} column={null} key={`c-n-n`} /> { /* last invisible droppable in column */ }
            </DndContext>
        </Layout>
    )
}

export default BlockFeild