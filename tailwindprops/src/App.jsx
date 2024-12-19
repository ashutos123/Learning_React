import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards.jsx'


function App() {
  const [count, setCount] = useState(0)
  
const myobj={
      name:"ashu",
      age:'23'
  }
let arr=[1,3,2]
//yahana Card me ek component se dusre component me value pass kar rahe hain.inn vlaues ko Card function me props  duara receive kiya jaega.aur fir unn values ko use kiya jaega.
//Card channel="chaiaurcode" someobj={myobj}// array ko aise hi pass kiya ja sakkta hai.
//ek Card ko multiple times likhne vo utni bar aa jata hai.
return (
    //we r using cards from dev ui and tailwindcss.com like websites. directly.
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      
      <Card username="aman" btnText="click me"/>
      <Card  username="ashu" btnText="visit me"/>
     
        
       


    </>
  )
}

export default App
