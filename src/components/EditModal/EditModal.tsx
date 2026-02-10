import React, { useState, useEffect } from 'react'
// import "./addModal.scss"
import { useDispatch } from 'react-redux'
import { editTask } from '../../Slices/taskSlice'



type Props = {
    close: () => void,
    task: object,


}

const EditModal = ({ close, task }: Props) => {
    const [taskName, setTaskName] = useState(task?.taskName ?? '');
    const [priority, setPriority] = useState(task?.priority ?? '');

    const dispatch = useDispatch();


    const handlePriority = (value) => {
        setPriority(value);
    }


    const handleEdit = () => {
        dispatch(
            editTask({
                id: task.id,
                updates: {
                    taskName: taskName,
                    priority,
                },
            })
        )

        close()
    }
    return (
        <div className='overlay'>

            <div className='modal'>
                <div className="modal__top">
                    <h2>Edit task</h2>
                    <button onClick={close}><img src="/src/assets/icons/close.svg" alt="" /></button>
                </div>

                <div className="modal__body">
                    <label htmlFor="task">Task</label>
                    <input type="text" name='task' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                    <label htmlFor="">Priority</label>
                    <div className='modal__buttons'>
                        <button className={`high ${priority == "High" ? 'active' : ""}`} onClick={() => handlePriority("High")}>High</button>
                        <button className={`medium ${priority == "Medium" ? 'active' : ""}`} onClick={() => handlePriority("Medium")}>Medium</button>
                        <button className={`low ${priority == "Low" ? 'active' : ""}`} onClick={() => handlePriority("Low")}>Low</button>
                    </div>

                </div>

                <button className='add' onClick={handleEdit}>Edit</button>

            </div>
        </div>
    )
}

export default EditModal