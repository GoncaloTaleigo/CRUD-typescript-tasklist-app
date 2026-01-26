import { useState } from 'react'
import Task from './components/Task/Task'
import './App.scss'
import { useSelector } from 'react-redux'
import { addTask } from './Slices/taskSlice'
import Modal from './components/AddEditModal/Modal'
function App() {

  const tasks = useSelector((state) => state.tasks)
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <div className='container-tasklist'>
        <div className="container-tasklist__top">
          <h1>TaskList</h1>
          <button className='container-tasklist__button' onClick={()=>setIsOpen(!isOpen)}>
            <img src="../src/assets/icons/add.svg" alt="" />
            Add task
          </button>
        </div>

        <div className='container-tasklist__list'>
          <Task />
          {tasks.map((task) => { return task.taskName })}
        </div>

        {isOpen ? <Modal></Modal> : ""}


      </div>

    </>
  )
}

export default App
