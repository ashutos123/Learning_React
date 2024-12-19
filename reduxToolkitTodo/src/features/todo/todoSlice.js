import {createSlice,nanoid} from '@reduxjs/toolkit';


const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)//inintial state ke andar todo ko push kr diya.

        },//state hamesha initial values ka access degi. vo values baad me jake change ho sakti hain.
        removeTodo:(state,action) =>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

    }
})


export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer




