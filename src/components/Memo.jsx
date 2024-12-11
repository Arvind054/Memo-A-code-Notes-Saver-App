import React from 'react'
import '../CSS/memo.css'
import { deleteMemo } from '../redux/memoSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { faTrash,faCopy , faEye, faPen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Memo = (params) => {
    const dispatch = useDispatch();
    function handleDelete(){
       dispatch(deleteMemo(params._id));
    }
    function handleCopy(){
         navigator.clipboard.writeText(params.content);
         toast.success("Text copied to clipboard");
    } 
  return (
    <div className='memoContainer'>
      <div className="memoData">
          <h2>{params.tittle}</h2> 
          <p>{params.content}</p>
        </div>
       <div className="memoActions">
          <button onClick={handleDelete} className='actionBtns'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
          <button onClick={handleCopy} className='actionBtns'><FontAwesomeIcon icon={faCopy}></FontAwesomeIcon></button>
         <Link to={`/memos/${params._id}`} > <button className='actionBtns'> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button></Link>
         
          <Link to={`/?memoId=${params._id}`} > <button className='actionBtns'><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></button></Link>
          <br />
          </div>
    </div>
  )
}

export default Memo
