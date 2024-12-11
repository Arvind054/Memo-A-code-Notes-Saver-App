import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';
export const memoSlice = createSlice({
  name: 'memo',
  initialState: {
    memos : localStorage.getItem("memos")? JSON.parse(localStorage.getItem("memos")) : []
  },
  reducers: {
    addMemo: (state, action) => {
        const memo = action.payload;
        state.memos.push(memo);
        localStorage.setItem("memos", JSON.stringify(state.memos));
      toast.success("Memo Created Successfully!");
    },
    updateMemo: (state, action) => {
       const memo = action.payload;
       const index = state.memos.findIndex((item)=>
        item._id === memo._id
      )
      if(index >= 0){
        state.memos[index] = memo;
        localStorage.setItem("memos", JSON.stringify(state.memos));
        toast.success("Memo Updated Successfully!")
      }else{
        toast.error("cannot update Memo, server Error, try Again");
      }
    },
    deleteMemo: (state, action) => {
     const memoId = action.payload;
        const index = state.memos.findIndex((item)=>
        item._id == memoId)
        if(index >= 0){
           state.memos.splice(index, 1);
           console.log(state.memos);
           localStorage.setItem("memos", state.memos);
           toast.success("Memo Deleted Successfully!")
        }else{
          toast.error("cannot delete Memo, Try Again");
        }
    },
    resetMemos: (state, action)=>{
        state.memos = [];
        localStorage.setItem("memos", JSON.stringify(state.memos));
        toast.success("Memos Resetted Successfuly!");
    },
  },
})

export const { addMemo, updateMemo, deleteMemo,resetMemos} = memoSlice.actions

export default memoSlice.reducer