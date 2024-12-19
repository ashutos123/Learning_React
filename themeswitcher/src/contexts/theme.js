import {createContext,useContext} from "react"

export const ThemeContext =createContext({
    themeMode:"light",
    darkTheme:() =>{},
    lightTheme:()  =>{},

})

export const ThemeProvider = ThemeContext.Provider// bina context provider me wrap kiye bagair bhi isko export kar sakte hain aur states ko use kar saakte hain.

export default function useTheme(){
    return useContext(ThemeContext)

}






