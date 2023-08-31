import { DroppableData } from "../../components/LogicBlocks/InvidibleDroppable/InvidibleDroppable"

interface BlockType {
    value: any
    type: string
    id?: number
}

type BlocksLineType = BlockType[]
type BlockScriptType = BlocksLineType[]

export function loadBlocks(): BlockScriptType {
    let blocks: BlockScriptType = [
        [
            {
                value: "1",
                type: "string"
            },
            {
                value: "2",
                type: "string"
            },
            {
                value: "3",
                type: "string"
            },
            {
                value: "4",
                type: "string"
            },
            {
                value: "5",
                type: "string"
            }
        ],
        [
            {
                value: "Переменная",
                type: "string"
            },
            {
                value: "+",
                type: "string"
            },
            {
                value: "-",
                type: "string"
            },
            {
                value: "/",
                type: "string"
            },
            {
                value: "*",
                type: "string"
            }
        ],
        [
            {
                value: "=",
                type: "string"
            },
            {
                value: "return",
                type: "string"
            },
            {
                value: "==",
                type: "string"
            },
            {
                value: "break",
                type: "string"
            },
            {
                value: "\"Some text\"",
                type: "string"
            }
        ]
    ]

    return transformBlocks(blocks)
}

// transform blocks to workable format
function transformBlocks (blocks: BlockScriptType) {

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
                let result = BlockScript[lineIndex][blockIndex]
                BlockScript[lineIndex] = BlockScript[lineIndex].filter(data => data.id !== targetId)
                return [result, BlockScript]
            }
        }
    }

    return [undefined, BlockScript]
}

function clearEmpty(BlockScript: BlockScriptType): BlockScriptType {
    for (let lineIndex = 0; lineIndex < BlockScript.length; lineIndex++) {
        if (BlockScript[lineIndex].length === 0) BlockScript = BlockScript.filter((_, index) => index !== lineIndex)
    }

    return BlockScript
}

export function moveBlock (BlockScript: BlockScriptType, targetId: number, targetPlaceData: DroppableData): BlockScriptType {

    let [Target, NewBlockScript] = removeBlock(BlockScript, targetId)

    if (!Target) {
        console.warn("Warning: block did not found")
        return NewBlockScript
    }

    const { direction, row, column } = targetPlaceData
    console.log(row, column)

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

    console.log(Target)
    console.log(NewBlockScript)
    return clearEmpty(NewBlockScript)
}