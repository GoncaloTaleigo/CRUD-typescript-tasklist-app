import { useState } from 'react'
import Task from './components/Task/Task'
import './App.scss'

function App() {


  return (
    <>
      <div className='container-tasklist'>
        <div className="container-tasklist__top">
          <h1>TaskList</h1>
          <button className='container-tasklist__button'>
            <img src="../src/assets/icons/add.svg" alt="" />
            Add task
            </button>
        </div>

        <div className='container-tasklist__list'>
          <Task/>
        </div>

      </div>

    </>
  )
}

export default App
