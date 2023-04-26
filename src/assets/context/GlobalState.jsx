/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initailState = {
  transactions: [],
};
// create context
export const GlobalContext = createContext(initailState);

// provider comp
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(AppReducer, initailState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "Add_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
