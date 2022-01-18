import EditTodo from "./components/EditTodo";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
      <div className="container">
      	<InputTodo />
		{/* <EditTodo /> */}
      	<ListTodos />
      </div>
  );

}

export default App;
