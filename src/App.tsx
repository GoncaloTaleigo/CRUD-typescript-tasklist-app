import { useState } from 'react'
import Task from './components/Task/Task'
import './App.scss'
import { useSelector } from 'react-redux'
import Modal from './components/AddEditModal/Modal'

function App() {

  const tasks = useSelector((state) => state.tasks)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='container-tasklist'>
        <div className="container-tasklist__top">
          <h1>TaskList</h1>
          <button className='container-tasklist__button' onClick={() => setIsOpen(!isOpen)}>
            <img src="../src/assets/icons/add.svg" alt="" />
            Add task
          </button>
        </div>

        <div className='container-tasklist__list'>
          {tasks.map((task)=> {
            return (
              <Task taskName={task.taskName} priority={task.priority} />
            )
          })}
        </div>

        {isOpen ? <Modal close={() => setIsOpen(!isOpen)}></Modal> : ""}


      </div>

    </>
  )
}

export default App
