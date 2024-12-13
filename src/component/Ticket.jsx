import React from "react";
import TicketNum from "./TicketNum";

const Ticket = ({ ticket }) => {
  return (
    <div>
      {ticket.map((item, index) => (
        <TicketNum key={index} num={item} />
      ))}
    </div>
  );
};

export default Ticket;
