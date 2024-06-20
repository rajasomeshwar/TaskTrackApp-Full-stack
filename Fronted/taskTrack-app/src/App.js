import "./App.css";
//import Counter from "./component/counter/Counter";
import TodoApp from "./component/Todos/todos";
import "bootstrap/dist/css/bootstrap.min.css";
// to access across the sub packages
function App() {
  return (
    <>
      <div className="App">
        {/* <Counter></Counter> */}
        <TodoApp></TodoApp>
      </div>
    </>
  );
}

export default App;
