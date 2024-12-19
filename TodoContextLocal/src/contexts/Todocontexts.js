import {createContext,useContext} from 'react'

export  const TodoContext = createContext({
    todos:[      //ye Todo ki list hai with features ek array me object ke form me.
        {
            id:1,
            todo:"Todo msg",
            completed:false,

        }
    ],
    addTodo:(todo) =>{},//functionality hai jo kahi aur define hogi,ye  todo ko add karega .(todo ,nam  ka argument lega.)
    updateTodo:(id,todo) =>{},//update karega,argument me uski id ,aur new todo lega.
    deleteTodo:(id)=>{},   //ye delete karega,id argument me lega.
    toggleComplete:(id) =>{} //ye uss todo par click karne par css implememnt kar ke uska bg color badal dega.

})

export const useTodo=()  =>{
    return useContext(TodoContext)

}


export const TodoProvider =TodoContext.Provider//taki wahan par .Provider na likhna pade.







