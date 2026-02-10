import React, { useState } from 'react'
import "./addModal.scss"
import { useDispatch } from 'react-redux'
import { addTask } from '../../Slices/taskSlice'


type Props = {
  close: () => void,

}


const Modal = ({ close }: Props) => {

  const [taskValue, setTaskValue]=useState("");
  const [priority,setPriority]=useState("")


   const dispatch = useDispatch();


   const handlePriority=(value)=>{
    setPriority(value);
   }


  const handleAdd=()=>{
    const value={
      id:crypto.randomUUID(),
      taskName:taskValue,
      priority:priority,
      status: "To do"
    }

    dispatch(addTask(value))

    close();

  }

  return (
    <div className='overlay'>

      <div className='modal'>
        <div className="modal__top">
          <h2>Add/Edit</h2>
          <button onClick={close}><img src="/src/assets/icons/close.svg" alt="" /></button>
        </div>

        <div className="modal__body">
          <label htmlFor="task">Task</label>
          <input type="text" name='task' onChange={(e)=>setTaskValue(e.target.value)} />
          <label htmlFor="">Priority</label>
          <div className='modal__buttons'>
            <button className={`high ${priority=="High"?'active':""}`} onClick={()=>handlePriority("High")}>High</button>
            <button className={`medium ${priority=="Medium"?'active':""}`} onClick={()=>handlePriority("Medium")}>Medium</button>
            <button className={`low ${priority=="Low"?'active':""}`} onClick={()=>handlePriority("Low")}>Low</button>
          </div>

        </div>

        <button className='add' disabled={!taskValue.trim() || !priority} onClick={handleAdd}>Add</button>

      </div>
    </div>
  )
}

export default Modal