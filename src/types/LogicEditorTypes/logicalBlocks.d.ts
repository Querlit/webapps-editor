
export type BlockValueType = any
export type BlockTypeType = "variable" | "method" | "construction" | "operator" | string
export type BlockId = number

export interface BlockType {
  value: BlockValueType,
  type: BlockTypeType,
  id?: BlockId,
  args?: BlockType[][] | [],
  logic?: BlockType[][] | [],
  methods?: BlockType[] | [],
  "predict-type"?: string
}

export type BlockLineType = BlockType[]
export type BlockScriptType = BlockLineType[]
