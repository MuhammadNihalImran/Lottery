import "./App.css";
import Lottery from "./component/Lottery";
import { sum } from "./helper";
function App() {
  let winningCondition = (ticket) => {
    // return ticket.every((num) => num === ticket[0]);
    // return sum(ticket) === 15;
    return ticket[0] === 0;
  };
  return (
    <>
      <Lottery n={3} winningCondition={winningCondition} />
    </>
  );
}

export default App;
