


function customRender(reactElement,container){
    /*
const domElement=document.createElement(reactElement.type)//oos element ka type,//domelement create kar dega.

domElement.innerHTML=reactElement.children
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.target)

container.appendChild(domElement)//domElement ko html ki oos specific section me jake add kar dega.
*/ // this code is  lil repeatetife in terms of setting attributes.
//improvig by using loops.
const domElement=document.createElement(reactElement.type)

domElement.innerHTML=reactElement.children

for (const prop in reactElement.props) {
    
    if(prop==='children') continue;//props me children aaye to nhi lena hai.khai yahan par nhi hai.
    domElement.setAttribute(prop,reactElement.props[prop])

   }
   container.appendChild(domElement)

}









const reactElement={//creating the element that will be injected.
    type:'a' ,       //anchor tag
    props:{         //props->properties of this element
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
    

}//react me bhi aise hi elements aur unke tree bante rehte hain,aur vo html me aise inject hote rehte hain.




const maincontainer=document.querySelector('#root')//getElemntById bhi use kar sakte hain,ek hi baat hai.
customRender(reactElement,maincontainer)//cunstomRender->ek function ya component hai.reactElement ->jo html me inject karna hai. maincontainer->html me jahan inject karna hai.








