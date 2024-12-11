import React, { useState } from 'react'
import Memo from './Memo'
import { useDispatch, useSelector } from 'react-redux'
import '../CSS/Memos.css'
const Memos = () => {
  const memos = useSelector((state)=>state.memo.memos);
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');
  const filteredData = memos.filter((memo)=>{
    return memo.tittle.toLowerCase().includes(searchVal.toLowerCase());
    
  })

  return (
    <div className='memosContainer'>
       <input type="search" placeholder='search Memos' value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}/>
       <div className='memosDisplay'>
          {
            filteredData.length > 0 &&
            filteredData.map((data)=>{
                return (<Memo key = {data._id} tittle = {data.tittle} content = {data.content} _id = {data._id}></Memo>)
            })
          }
       </div>
    </div>
  )
}

export default Memos
