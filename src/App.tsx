import { useState } from 'react'
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
  const [addId, setAddId]=useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [editId, seteditId] = useState(0);
  const [oldTask, setOldTask] = useState(null);


  console.log(oldTask);

  return (
    <>
      <div className='container-tasklist'>
        <div className="container-tasklist__top">
          <h1>TaskList</h1>
          <button className='container-tasklist__button' onClick={() => setOpenAdd(!openAdd)}>
            <img src="../src/assets/icons/add.svg" alt="" />
            Add task
          </button>
        </div>

        <div className='container-tasklist__list'>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                taskName={task.taskName}
                priority={task.priority}
                status={task.status}
                openDelete={() => { setOpenDeleteModal(true); setDeleteId(index) }}
                openEditModal={() => { setOpenEdit(true); seteditId(index);setOldTask(task) }}
                
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
