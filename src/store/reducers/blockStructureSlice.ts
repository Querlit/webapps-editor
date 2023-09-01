import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DroppableLocatorType } from '../../types/LogicEditorTypes/DragAndDrop'
import { moveBlock, processBlocks } from '../lib/LogicEditorScripts/blockScripts'
import { BlockScriptType } from '../../types/LogicEditorTypes/logicalBlocks'

export interface BlockStructureState {
  blocks: BlockScriptType | null,
  config: {
    isLoading: boolean
  }
}

const initialState: BlockStructureState = {
  blocks: null,
  config: {
    isLoading: false
  }
}

export const blockStructureSlice = createSlice({
  name: 'blockStructure',
  initialState,
  reducers: {
    setupBlocks(state, action: PayloadAction<BlockScriptType>) {
      state.blocks = processBlocks(action.payload)
    },
    dragBlock(state, action: PayloadAction<{
      targetId: number,
      targetPalceData: DroppableLocatorType
    }>) {
      state.blocks = moveBlock(state.blocks, action.payload.targetId, action.payload.targetPalceData)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setupBlocks, dragBlock } = blockStructureSlice.actions

export default blockStructureSlice.reducer