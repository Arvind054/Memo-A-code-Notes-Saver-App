import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../CSS/ViewMemo.css'
const ViewMemo = () => {
  const memoObj = useParams();
  const memoId = memoObj.id;
const allMemos = useSelector((state)=>state.memo.memos);
const currMemo = allMemos.find((item)=> item._id === memoId)
  return (
    <div>
       <div className='inputComponentView'>
        <input
         type="text"
         placeholder='Enter Your Tittle Here'
         value={currMemo.tittle}
         disabled
          />
          </div>
          <div className='mainInputView'>
            <textarea name="" id=""
            value = {currMemo.content}
            placeholder='Enter your Notes Here'
            rows={20}
            cols={80}
            disabled
            ></textarea>
            
          </div>
    </div>
  )
}

export default ViewMemo
