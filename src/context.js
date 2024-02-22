import React, { useState } from "react";
import  { useReducer } from "react";
import { createContext } from "react";
import { registrationDataReducer } from "./reducer";

const initialState = [];


const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [registrationData, dispatch] = useReducer(registrationDataReducer, initialState);

  return (

    <AppContext.Provider
      value={{ registrationData, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

