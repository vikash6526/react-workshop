import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <h2>Expenses!</h2>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
