import React from 'react'
import "./Task.scss";

type Props = {
  taskName:string,
  priority:string
}

const Task = ({taskName,priority}: Props) => {
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
        <div className="task_status"></div>
        <div className="task__progress"></div>
        <div className="task__edit"></div>
        <div className="task__delete"></div>

    </div>
  )
}

export default Task