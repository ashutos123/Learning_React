import React from "react"
import UserContext from "./UserContext";

const UserContextProvider=({children}) =>{   //children me jo bhi chhez aaegi voo usse paass kar dega.
    const [user,setUser] =React.useState(null)
    return (   //Usercontext.Provider me jo value pass hogi ,vo children access kar sakega.
        <UserContext.Provider value={{user,setUser}}> 
            {children}                 
        </UserContext.Provider>
    )
}


export default UserContextProvider











