
import { BlockId, BlockType } from "../../../types/LogicEditorTypes/logicalBlocks";

interface BlockDataType {
    isConstruction: boolean,
    blockId: BlockId,
}

export function getBlockData(block: BlockType): BlockDataType {
    return {
        isConstruction: block.type === "construction",
        blockId: block.id || 0
    }
}
