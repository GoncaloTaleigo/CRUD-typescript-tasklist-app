import { useState,useEffect } from 'react'
import Task from './components/Task/Task'
import './App.scss'
import { useSelector } from 'react-redux'
import AddModal from './components/AddModal/AddModal'
import Delete from './components/DeleteTaskModal/Delete'
import EditModal from './components/EditModal/EditModal'

function App() {

  const tasks = useSelector((state) => state.tasks)
  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [editId, seteditId] = useState(0);
  const [oldTask, setOldTask] = useState(null);


useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
    <>
      <div className='container-tasklist'>
        <div className="container-tasklist__top">
          <h1>Task List</h1>
          <button className='container-tasklist__button' onClick={() => setOpenAdd(!openAdd)}>
            <img src="../src/assets/icons/add.svg" alt="" />
            Add task
          </button>
        </div>

        <div className='container-tasklist__list'>
          {tasks.slice()
            .reverse().map((task, index) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  taskName={task.taskName}
                  priority={task.priority}
                  status={task.status}
                  openDelete={() => { setOpenDeleteModal(true); setDeleteId(task.id) }}
                  openEditModal={() => { setOpenEdit(true); seteditId(task.id); setOldTask(task) }}

                />
              )
            })}
        </div>

        {openAdd ? <AddModal close={() => setOpenAdd(!openAdd)} ></AddModal> : ""}
        {openEdit ? <EditModal key={editId} task={oldTask} editTaskId={editId} close={() => { setOpenEdit(!openEdit) }}></EditModal> : ""}
        {openDeleteModal ? <Delete deletedTask={deleteId} close={() => setOpenDeleteModal(false)}></Delete> : ""}


      </div>

    </>
  )
}

export default App
