import { createSlice } from "@reduxjs/toolkit";


const STATUSES = ["To do", "In progress", "Done"]

const loadTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const taskSlice = createSlice({
    name: "tasks",
    initialState: loadTasks(),
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },

        removeTask: (state, action) => {
            console.log("Removing:", action.payload);
            return state.filter(task => task.id !== action.payload)
        },

        editTask: (state, action) => {
            const { id, updates } = action.payload;

            const task = state.find(task => task.id === id);
            if (task) {
                Object.assign(task, updates);
            }
        },
        updateStatus: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            if (!task) return;

            const currentIndex = STATUSES.indexOf(task.status);
            const nextIndex = (currentIndex + 1) % STATUSES.length;

            task.status = STATUSES[nextIndex];
        }

    }

})



export const { addTask, removeTask, editTask, updateStatus } = taskSlice.actions;
export default taskSlice.reducer;