import React, { createContext, useContext, useReducer } from 'react'

// Prepares the data
export const StateContext = createContext()

//wraps the app & provides the dataLayer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Pulls info from the dataLayer
export const useStateValue = () => useContext(StateContext)