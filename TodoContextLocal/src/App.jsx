import { useState } from 'react'
import { TodoProvider } from './contexts'

import './App.css'

  
function App() {
  const [todos, setTodos] = useState(0)

   const addTodo=(todo)=>{//todo ,form se milta hai.
     setTodos((prev) =>[{id:Date.now(),...todo},...prev])}//prev me todos ka previous state yani pehle ke data honge,aur naya todo jo aega  vo isme age ya pichhe append ho jaega depending upon ki naye todo ko ...prev se age rakhte hain ki bad me.,...prev ko destructure karte hain.naya todo ayega vo ek object hoga to usko bhi destructure karna hoga.id=Date.now(),just bcuz hum unique value lena chahte hain uski. 

      const updateTodo=(id,todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
      }//prev me previous todos ke array ki state hai.uspe map laga dene se each todos object mil jaega.usme .id lagane se wo id mil mil jaegi.fir uss id ko match karte hain,agar match hui to todo append kar do nhi to prevTodo hi rehne do.


      const deleteTodo=(id) =>{
        setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
      }//yahan filter kiya hai,jo ki js ki ek functionality hai.prev me previous state hai,uske ek ek object par jaega aur uske id se given id match karega,jo matchnhi karega usko filterm  kr ke wqapas lelega aur jo nhi karega usko wahi chhor dega.

     const toggleComplete=(id)=>{
        setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
     }//prevTodo me jo previous value hai completed ki usko invert kar diya hai.

     

     //laocal storage(browser ka):-in js., set_item and get_item .ye jason se string and vice  versa karne ke liye use hote hain.

      useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length>0){
            setTodos(todos)
        }
      } ,[])

      useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
      },[todos])







    



  //value me todos->properties,aur baki ke methopds aa jayenge.fir inn methods ko yahan par define karenge.
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    

        <div>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto 
                shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold 
                    text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       


                       
                        {/* Todo form goes here */} 
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                     {todos.map((todo)=>(
                    <div key={todo.id}
                    className='w-full'>
                    <TodoItem todo={todo}/>
                    </div>
                    ))
                     }



                    </div>
                </div>
            </div>

        </div>
         
        
    </TodoProvider>
  )
}

export default App
