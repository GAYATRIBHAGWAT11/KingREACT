import { createContext } from "react";

const AppContext=createContext()



const AppProvider=({children})=>{
    return <AppContext.Provider value='gayatri'>{children}</AppContext.Provider>
    
}
export default {AppContext, AppProvider};