import Header from "./assets/components/Header";
import Balance from "./assets/components/Balance";
import IncomeExpense from "./assets/components/IncomeExpense";
import TransactionList from "./assets/components/TransactionList";
import AddTransaction from "./assets/components/AddTransaction";

import { GlobalProvider } from "./assets/context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
