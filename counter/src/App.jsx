import { useState,useEffect} from 'react'//ye hooks hain jinko import kiya inke alag alag role hain.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //yahan par counter ek variable hai jisme useState se return  hua value jata hai.setCounter bhi ek function hai,jo kya vlaue update ya set karni vo leta hai.inn dono ka nam kuchh bhi ho sakta hai.yahan par agar chNGE KARTE HAIN to sab jagah karna padega.
  let [counter, setCounter] = useState(5)//useState ek hook hai jo ek default value leta hai,aur oos value ko vo poore DOM me manipulate karta hai.State ka mane variable hi hota hai ek tarah se.kyunki counter yahan changing variable isliye let use krenge.
  
  //let counter=5
  const addValue=()=>{
    console.log("clicked,counter");
    //counter=counter+1;
   //-----------------------------------
     //aise multiple times likhne se aisa nhi ki value 5 se update ho jaega addValue click karne se.abhi bhi ek 1 se hi uopdate hoga.aisa useState ki property se hota hai.ye  similar jobs ko batch me karta hai.aur isliye inn sabka mila ek hi hoga. 
    //setCounter(counter+1);
    //setCounter(counter+1);
    //setCounter(counter+1);
    //setCounter(counter+1);
    //setCounter(counter+1);
//---------------------------------------
  // setCounter((prevcounter)=> counter+1)//setConter ek callback function,leta hai.callback func ka arguement counter ki  immediate previous  value hoti hai.agar multi times likhen to ek bar me multi times  increament ho sakta hai.
  // setCounter((prevcounter)=> counter+1)
  // setCounter((prevcounter)=> counter+1)
  // setCounter((prevcounter)=> counter+1)
  // setCounter((prevcounter)=> counter+1)
     //ye ek concept hai jo interview me puchha ja sakta hai.
//------------------------------------------------






    counter=counter+1;
    if(counter<=20)  //ye condition laga ke hum  counter ki value 20 se jyada hone par ui me nhi reflect hogi,variable me ho sakti hai.
    setCounter(counter);
    else
    setCounter(20);

  }
  const sub_Value=()=>{
    console.log("clicked,counter");
    //counter=counter-1;//counter variable ko bhi directly feed kiya ja sakta hai setCounter me.
    //setCounter(counter-1);
     counter=counter-1;
     if(counter>=0)  //ye condition laga ke hum  counter ki value 0 se kam hone par ui me nhi reflect hogi,variable me ho sakti hai.
    setCounter(counter);
    else
    setCounter(0);
  }
  return (
    <>
     <h1> this is  counter project making</h1>
      <h2> counter value:{counter}</h2>

      <button onClick={addValue}>add value:{counter}</button>
       <br/>
      <button onClick={sub_Value}>decrease value:{counter}</button>
      <p>this is how it chnages:{counter}</p>

    </>
  )
}

export default App

//https://github.com/acdlite/react-fiber-architecture ->study this to understand fibre algo.


