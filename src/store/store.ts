
import { configureStore } from '@reduxjs/toolkit'

import activeBlockSlice from './reducers/activeBlockSlice'
import blockStructureSlice from './reducers/blockStructureSlice'

export const store = configureStore({
  reducer: {
    activeBlock: activeBlockSlice,
    blockStructure: blockStructureSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch