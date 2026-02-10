import React from 'react'
import "./Task.scss";
import { useDispatch } from 'react-redux';

type Props = {
  taskName:string,
  priority:string,
  status:string,
  openDelete:() => void,
  setDeleteValue:()=>void,
  openEditModal:()=>void
}

const Task = ({taskName,priority,status,openDelete,openEditModal}: Props) => {
  
  
  return (
    <div className='task'>
        <div className="task__name">
            <span>Task</span>
            <span>{taskName}</span>
        </div>
        <div className="task__priority">
            <span>Priority</span>
            <span>{priority}</span>
        </div>
        <div className="task__status">
          <span>Status</span>
          <span>{status}</span>
        </div>
        <div className="task__progress"></div>
        <div className='task__actions'>
        <img onClick={openEditModal} src="../../../src/assets/icons/edit.svg" alt="" />
        <img onClick={openDelete} src="../../../src/assets/icons/delete.svg" alt="" />

        </div>


    </div>
  )
}

export default Task