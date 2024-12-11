import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addMemo, updateMemo } from '../redux/memoSlice';
import '../CSS/Home.css'
const Home = () => {
  const [tittle, setTittle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const memoId = searchParams.get("memoId");
  const allMemos = useSelector((state)=>state.memo.memos);
  const dispatch = useDispatch();
  useEffect(() => {
    if(memoId){
       const currMemo = allMemos.find((item)=> item._id === memoId);
       setTittle(currMemo.tittle);
       setValue(currMemo.content);
    }
    
 }, [memoId]);
  function addMemofunc(){
     const memo = {
      tittle : tittle,
      content : value,
      _id : memoId || Date.now().toString(36),
      create_At : new Date().toISOString
     }
     
     
     if(memoId){
      // update
      dispatch(updateMemo(memo))
     }else{
        //create
        dispatch(addMemo(memo))
     }
     setTittle("");
     setValue("");
     setSearchParams({});
  }
  return (
    <div className='HomeComp'>
       <div className='inputComponent'>
        <input
         type="text"
         placeholder='Enter Your Tittle Here'
         value={tittle}
         onChange={(e)=>setTittle(e.target.value)}
   
          />
          <button onClick={addMemofunc}>{memoId ? "UpdateMemo": "AddMemo"}</button>
          </div>
          <div className='mainInput'>
            <textarea name="" id=""
            value = {value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder='Enter your Notes Here'
            rows={20}
            cols={80}
            ></textarea>
          </div>
    </div>
  )
}

export default Home
