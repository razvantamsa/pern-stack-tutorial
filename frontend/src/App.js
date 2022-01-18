import { Fragment } from "react";
import EditTodo from "./components/EditTodo";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
      	<InputTodo />
      </div>
      <EditTodo />
      <ListTodos />
    </Fragment>
  );

}

export default App;
