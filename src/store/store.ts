
import { configureStore } from '@reduxjs/toolkit'

import activeBlockSlice from './reducers/activeBlockSlice'

export const store = configureStore({
  reducer: {
    activeBlock: activeBlockSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch