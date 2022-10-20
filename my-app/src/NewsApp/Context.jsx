import React, { useContext, useState } from "react";
import { createContext } from "react";



const NewsContext = createContext();
const NewsProvider = () => {

    const DisplayFun = ({ children }) => {
        const [Display, setDisplay] = useState(false)
        return (
            <>
                <NewsContext.Provider value={setDisplay(!Display)}> {children}</NewsContext.Provider>
            </>
        )
    }
}
export { NewsContext, NewsProvider }
// if we are importing multiple then we will not use default here