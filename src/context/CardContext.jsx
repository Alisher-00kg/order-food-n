import React, { createContext, useReducer } from "react";
import { foods } from "../utils/constants/foods";
export const MyContext = createContext({});
const initialState = {
  array: [],
  isArray: [],
};
const reduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, array: [...state.array, action.payload] 
        
      };
  }
};
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
