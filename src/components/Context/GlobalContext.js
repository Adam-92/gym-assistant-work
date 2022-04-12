import { useContext, createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ( { children } ) => {
    
    const [ openModal, setOpenModal ] = useState(true)
    const [ choosenFigure, setChoosenFigure ] = useState(null)

    const value = {
        openModal,
        choosenFigure,
        setOpenModal,
        setChoosenFigure
    }
   
    return(
        <AppContext.Provider value={value} >
            { children }
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext, AppContext }