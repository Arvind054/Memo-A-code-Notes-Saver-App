import { configureStore } from '@reduxjs/toolkit'
import  memoReducer  from './redux/memoSlice'
export default configureStore({
  reducer: {
    memo: memoReducer,
  },
})