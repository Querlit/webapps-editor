
export interface BlockType {
  value: any,
  type: string,
  id?: number
  args?: BlockType[][] | [],
  logic?: BlockType[][] | [],
  methods?: BlockType[] | [],
  "predict-type"?: string
}

export type BlockLineType = BlockType[]
export type BlockScriptType = BlockLineType[]
