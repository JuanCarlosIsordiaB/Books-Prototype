import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    //Estructura del estado que quermeos manejar
    items: [],
    createItem: (item) => { },
    getItem: (id) => {},
    updateItem: (item) => {}
});

export const Store = ({children}) => {

    const [items, setItems ] = useState([]);

    const createItem = ( item ) => {
        setItems([ item,...items]);
        
    }

    const getItem = ( id) => {
        const item = items.find( item  => item.id === id);
        return item;
    }

    const updateItem = (item) => {
        const index = items.findIndex( item  => item.id === id);
        const temp = [...items];

        temp[index] = {...item};
    }



    return (
        <AppContext.Provider value={{items, createItem,getItem,updateItem}}>
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContext() {
    return useContext(AppContext);
}
