import React from 'react'
import { removeTask } from '../../Slices/taskSlice';
import { useDispatch } from 'react-redux';
import "./delete.scss"
import "../AddModal/addModal.scss"
type Props = {
    close:()=>void,
    deletedTask:number
}

const Delete = ({close,deletedTask}: Props) => {
 
  const dispatch = useDispatch();

  const handleEdit=()=>{
    console.log("Edit Modal");
  }
  
  const handleDelete=(id:number)=>{
    dispatch(removeTask(id));
    close();
  }


  return (
    <div className='overlay'>
      <div className='modal'>
        <h2>Are you sure you want to delete this task?</h2>

        <div className='modal__buttons'>
            <button className='delete' onClick={()=>handleDelete(deletedTask)}>Delete</button>
            <button className='cancel' onClick={close}>Cancel</button>
        </div>

      </div>
    </div>
  )
}

export default Delete