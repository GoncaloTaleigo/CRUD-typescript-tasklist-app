import React, { useState } from 'react'
import "./Task.scss";
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../Slices/taskSlice';

type Props = {
  id: string | number,
  taskName: string,
  priority: string,
  status: string,
  openDelete: () => void,
  setDeleteValue: () => void,
  openEditModal: () => void
}

const Task = ({ id, taskName, priority, status, openDelete, openEditModal }: Props) => {

  const dispatch = useDispatch();

  const handleStatusUpdate = () => {
    dispatch(updateStatus(id))
  }


  return (
    <div className='task'>
      <div className="task__name">
        <span className='text-gray'>Task</span>
        <span>{taskName}</span>
      </div>
      <div className="task__priority">
        <span className='text-gray'>Priority</span>
        <span className={`${priority.toLowerCase()}`}>{priority}</span>
      </div>
      <div className="task__status">
        <span className='status' onClick={handleStatusUpdate}>{status}</span>
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