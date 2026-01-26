import { createSlice } from "@reduxjs/toolkit";




const initialState=[{id:1,taskName:"Go to gym", priority:"High", status:"toDo"}]


const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state,action) => {
            console.log("add task")
        },

        removeTask: (state,action) => {
            console.log("add task")
        }


    }

})



export const { addTask,removeTask} = taskSlice.actions;
export default taskSlice.reducer;