import React, {createContext, useState} from 'react'

export const MenuContext = createContext()

export const MenuProvider = props => {
    const [open, setOpen] = useState(true)
    return (
     <MenuProvider value={[open, setOpen]}>{props.chidlren}</MenuProvider>   
    )
}