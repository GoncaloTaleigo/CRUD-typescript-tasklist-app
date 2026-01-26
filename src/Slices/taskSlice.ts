import { createSlice } from "@reduxjs/toolkit";




const initialState=[];


const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state,action) => {
            state.push(action.payload)
        },

        removeTask: (state,action) => {
            console.log("add task")
        }


    }

})



export const { addTask,removeTask} = taskSlice.actions;
export default taskSlice.reducer;