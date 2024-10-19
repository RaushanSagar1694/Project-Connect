

import React from 'react'
import { createContext, useState } from 'react';
import assets from '../assets/assets';
//import students from '../assets/ProjectData';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        assets,
    };

    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;
