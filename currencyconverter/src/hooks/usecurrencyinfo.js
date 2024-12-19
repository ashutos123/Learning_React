//makinmg custom hooks
// function hello(){   // it is also a custom hook
//     return []
// }

//
import { useEffect,useState } from 'react'//will use these built-in hooks to  make custom hooks.
//---------------------------------------
function usecurrencyinfo(currency){  //this hook returns some data
     const [data,setData]=useState({})//useState me ek empty object de diya hai taki api fetch na ho paye tob bhi iss obj pe  chal sake , crash na ho.
    useEffect(()=>{
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0
       /currency-api@1/latest/currencies/${currency}.json`)
       .then((res)=>res.json())//api se jo call hoga vo response res me hoga,aur vo data string me bhi hoga,to usko json me convert karna hoga .json() call se.
       .then((res) =>setData(res[currency]))//res me json format ka data hai.isme currency wale key  ko call kiya hai res[currency ] kar ke.currency me inr doge to inr to others conversion hoga, usd doge to usd to others hoga etc.
       console.log(data);

     },  [currency])//sq bracket me currency nam ki ependency hai jo jisme jab bhi koi change hogi to function call ho jaega.s
     console.log(data);
     return data

}
//this is a custom hooks designing.
//-------------------------------------


export default usecurrencyinfo;














