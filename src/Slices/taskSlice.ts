import { createSlice } from "@reduxjs/toolkit";




const initialState = [];


const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },

        removeTask: (state, action) => {
            console.log("Removing:", action.payload);
            state.splice(action.payload, 1);
        },

        editTask: (state, action) => {
            const { id, updates } = action.payload;

            const task = state.find(task => task.id === id);
            if (task) {
                Object.assign(task, updates);
            }
        },

    }

})



export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;