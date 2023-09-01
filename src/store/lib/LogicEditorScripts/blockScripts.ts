import { DroppableLocatorType } from "../../../types/LogicEditorTypes/DragAndDrop"
import { BlockScriptType, BlockType } from "../../../types/LogicEditorTypes/logicalBlocks"


// transform blocks to workable format
export function processBlocks (blocks: BlockScriptType) {

    for (let BlockLine of blocks) {
        for (let Block of BlockLine) {
            Block.id = Math.random()
        }
    }

    return blocks
}

function removeBlock(BlockScript: BlockScriptType, targetId: number): [BlockType, BlockScriptType] | [undefined, BlockScriptType] {

    for (let lineIndex = 0;lineIndex < BlockScript.length;lineIndex++) {
        for (let blockIndex in BlockScript[lineIndex]) {
            if (BlockScript[lineIndex][blockIndex].id === targetId) {
                let result = {...BlockScript[lineIndex][blockIndex]}
                BlockScript[lineIndex][blockIndex].type = "block_to_remove"
                return [result, BlockScript]
            }
        }
    }

    return [undefined, BlockScript]
}

function clearEmpty(BlockScript: BlockScriptType): BlockScriptType {
    for (let lineIndex = 0; lineIndex < BlockScript.length; lineIndex++) {
        BlockScript[lineIndex] = BlockScript[lineIndex].filter(block => block.type !== "block_to_remove");
    }
    BlockScript = BlockScript.filter(line => line.length !== 0);

    return BlockScript
}

export function moveBlock (BlockScript: BlockScriptType | null, targetId: number, targetPlaceData: DroppableLocatorType): BlockScriptType | null {

    if (BlockScript === null) {
        console.warn("Warning: variable BlockScript is empty")
        return BlockScript
    }

    let [Target, NewBlockScript] = removeBlock(BlockScript, targetId)

    if (!Target) {
        console.warn("Warning: block did not found")
        return NewBlockScript
    }

    const { direction, row, column } = targetPlaceData

    if (direction === "column") {

        if (column === null) {
            NewBlockScript.push([ Target ])
        } else {
            NewBlockScript.splice(column, 0, [ Target ])
        }

    } else {

        if (row === null) {

            if (column === null) {
                NewBlockScript[NewBlockScript.length-1].push(Target)
            } else {
                NewBlockScript[column].push(Target)
            }

        } else {

            if (column === null) {
                NewBlockScript[NewBlockScript.length-1].splice(row, 0, Target)
            } else {
                NewBlockScript[column].splice(row, 0, Target)
            }

        }

    }
    return clearEmpty(NewBlockScript)
}