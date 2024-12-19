import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
      <div>
        <h1>custom app!frer</h1>
      </div>
    )

}


const anotheruser="chai aur code"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotheruser//yahan par sirf ek evaluated expressio hi likh sakte ho,na ki poora  javscript likhoge.
)
//ye normal react jaisa hi hai.ReactDOM se virtual dom banata hai,root create karta hai,fir oose direct rnder kar deta hai.ye root nam ke variable me VD ke refernece ko store karne ke bajay , direct .render kar diya hai.
ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <React.StrictMode>//ye rahe na hrahe farak nhi padta.
   ///Myapp()//ye aise bhi run kar sakta hai .Myapp hai to ek function hi .
   //<Myapp/>//iske andar ka html ultimately object format me i convert ho rha hai.
   <App/>
   //reactElement      //ye strict mode me kam nhi karega.
   
   // </React.StrictMode>
)
