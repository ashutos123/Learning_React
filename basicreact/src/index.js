import React from 'react';//ye core foundational libreary that takes references.web ke DOM ko manipulate karne ke liye yehi do libraries kam ati hain.
import ReactDOM from 'react-dom/client';//react-dom, react ka implemnetation hai web pe.jaise reactt-native react ka implementation hai mobile apps pe.

import App from './App';


//ReactDOM ,is keyword se ek virtual dom banti hai,createRoot keyword se oos dom ki ek root banti hai,aur vo root ek html element expect karti hai,jo ki div,style,head,etc kuchh bhi ho sakti hai.
const root = ReactDOM.createRoot(document.getElementById('root'));//html doc me ek element hai hai jiski id root hai,usi ko select kar raha hai yahan.root variable me virtual dom ka reference liya ja raha hai.
root.render(//root variable me jo virtual dom mila hai usko render karo.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//<React.StrictMode> ,ye tag na bhi rahe to <App/> render ho jaega.

//.json file me ek "scripts" nam ki dependenci hai jo indexedDB.js ko backdoor se indexedDB.html me inject kar deti hai.uske bad html  doc execute hoti hai.

