import React from "react";
import { useState } from "react";
import { getTicketNumber, sum } from "../helper";
import Ticket from "./Ticket";

const Lottery = ({ n = 3, winningCondition }) => {
  let [ticket, setTicket] = useState(getTicketNumber(n));
  let isWinning = winningCondition(ticket);
  let buyTicket = () => {
    setTicket(getTicketNumber(n));
  };
  return (
    <div>
      <p>Lottery</p>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <br />
      <br />
      <button onClick={buyTicket}>buyTicket</button>
      <br />
      <br />
      <br />
      <h3>{isWinning && "congratulation, you win!"}</h3>
    </div>
  );
};

export default Lottery;
