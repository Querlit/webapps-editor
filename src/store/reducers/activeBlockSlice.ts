import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ActiveBlockState {
  id: number | null,
  isDragging: boolean
}

const initialState: ActiveBlockState = {
  id: null,
  isDragging: false
}

type BlockID = number

export const ActiveBlockSlice = createSlice({
  name: 'activeBlock',
  initialState,
  reducers: {
    startDragging: (state, action: PayloadAction<BlockID>) => {
      state.id = action.payload
      state.isDragging = true
    },
    stopDragging: (state) => {
      state.isDragging = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { startDragging, stopDragging } = ActiveBlockSlice.actions

export default ActiveBlockSlice.reducer