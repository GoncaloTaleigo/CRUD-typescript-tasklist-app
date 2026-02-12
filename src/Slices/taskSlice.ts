import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TaskType } from "../types"

const STATUSES = ["To do", "In progress", "Done"]

const loadTasks = (): TaskType[] => {
  const savedTasks = localStorage.getItem("tasks")
  return savedTasks ? JSON.parse(savedTasks) as TaskType[] : []
}

const initialState: TaskType[] = loadTasks()

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {

    addTask: (state, action: PayloadAction<TaskType>) => {
      state.push(action.payload)
    },

    removeTask: (state, action: PayloadAction<string | number>) => {
      return state.filter(task => task.id !== action.payload)
    },

    editTask: (
      state,
      action: PayloadAction<{
        id: string | number
        updates: Partial<TaskType>
      }>
    ) => {
      const { id, updates } = action.payload

      const task = state.find(task => task.id === id)
      if (task) {
        Object.assign(task, updates)
      }
    },

    updateStatus: (state, action: PayloadAction<string | number>) => {
      const task = state.find(t => t.id === action.payload)
      if (!task) return

      const currentIndex = STATUSES.indexOf(task.status)
      const nextIndex = (currentIndex + 1) % STATUSES.length

      task.status = STATUSES[nextIndex]
    }

  }
})

export const { addTask, removeTask, editTask, updateStatus } = taskSlice.actions
export default taskSlice.reducer
