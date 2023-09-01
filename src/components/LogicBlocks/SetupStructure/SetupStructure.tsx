
import React from 'react'
import { BlockId, BlockScriptType } from '../../../types/LogicEditorTypes/logicalBlocks'
import ConstructionDraggable from '../ConstructionDraggable/ConstructionDraggable'
import { getBlockData } from '../../../store/lib/LogicEditorScripts/getBlockData'
import CommonDraggable from '../CommonDraggable/CommonDraggable'

type Props = {
    BlockScript: BlockScriptType
    parentIds: BlockId[] | []
}

const SetupStructure: React.FC<Props> = ({
    BlockScript,
    parentIds=[],
}) => {

    return (
        <React.Fragment>
            { BlockScript.map((blockLine, blockLineIndex) => {
                if (blockLine.length === 0) return;
                const firstBlockData = getBlockData(blockLine[0])

                if (firstBlockData.isConstruction) return (
                    <ConstructionDraggable
                        constructionBlock={blockLine[0]}
                        key={firstBlockData.blockId}
                    />
                );

                return (
                    <React.Fragment> { /* Line of logical blocks */ }
                        { blockLine.map((block, blockIndex) => (
                            <CommonDraggable block={block} key={block.id} />
                        )) }
                    </React.Fragment>
                )
            }) }
        </React.Fragment>
    )
}

export default SetupStructure
