import React, { useState } from 'react'
import "./modal.scss"
import { useDispatch } from 'react-redux'
import { addTask } from '../../Slices/taskSlice'

type Props = {
  close: () => void,

}


const Modal = ({ close }: Props) => {

  const [taskValue, setTaskValue]=useState("");
  const [priority,setPriority]=useState("")

   const dispatch = useDispatch();

  const handleClick=()=>{
    const value={
      taskName:taskValue,
      priority:priority
    }

    dispatch(addTask(value))

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
            <button className='high' onClick={()=>setPriority("High")}>High</button>
            <button className='medium' onClick={()=>setPriority("Medium")}>Medium</button>
            <button className='low' onClick={()=>setPriority("Low")}>Low</button>
          </div>

        </div>

        <button className='add' onClick={handleClick}>Add</button>

      </div>
    </div>
  )
}

export default Modal