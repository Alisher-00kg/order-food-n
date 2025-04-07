import React, { createContext, useContext, useReducer } from "react";
import { foods } from "../utils/constants/foods";
export const MyContext = createContext({});
const initialState = {
  foods: [...foods],
  orderFoods: [],
};
const reduser = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        foods: state.foods.map((item) =>
          item.id == action.id ? { ...item, amount: action.payload } : item
        ),
      };
  }
};
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);
  const HandleAdd = () => {
    const [poducts1, poducts2, poducts3, poducts4] = foods;
    dispatch({
      type: "ADD",
      payload: poducts1,
      poducts2,
      poducts3,
      poducts4,
    });
  };
  return (
    <MyContext.Provider value={{ state, dispatch, HandleAdd }}>
      {children}
    </MyContext.Provider>
  );
};

export const useCard = () => useContext(MyContext);
