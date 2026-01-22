import React from 'react'
import "./Task.scss";

type Props = {}

const Task = (props: Props) => {
  return (
    <div className='task'>
        <div className="task__name">
            <span>Task</span>
            <span>Go to the gym</span>
        </div>
        <div className="task__priority">
            <span>Priority</span>
            <span>High</span>
        </div>
        <div className="task_status"></div>
        <div className="task__progress"></div>
        <div className="task__edit"></div>
        <div className="task__delete"></div>

    </div>
  )
}

export default Task