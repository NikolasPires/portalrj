import { createContext, useState } from "react";

export const HeaderContext = createContext({})


export const HeaderProvider = ({children}) => {
    const [opacity, setOpacity] = useState(true);
    const [display, setDisplay] = useState('none')

    return (
        <HeaderContext.Provider value={{opacity, setOpacity, display, setDisplay}}>
            {children}
        </HeaderContext.Provider>
    )
}