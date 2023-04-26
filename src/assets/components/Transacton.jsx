/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transacton({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign} {Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className='delete-btn'
        >
          x
        </button>
      </li>
    </>
  );
}

export default Transacton;
