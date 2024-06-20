import { useAutho } from "./security/AunthContext";
import {
  DeleteTodoByidApi,
  retriveTodosByUsernameApi,
} from "./Apicalls/Helloworldapi";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ListTodoComponent() {
  const todaydate = new Date();
  const targetdate = new Date(
    todaydate.getFullYear() + 1,
    todaydate.getMonth(),
    todaydate.getDay()
  );
  // const todos = [
  //   {
  //     id: 1,
  //     description: "learn react",
  //     isdone: false,
  //     targetdate: targetdate,
  //   },
  //   {
  //     id: 2,
  //     description: "learn springboot",
  //     isdone: false,
  //     targetdate: targetdate,
  //   },
  //   {
  //     id: 3,
  //     description: "learn react",
  //     isdone: false,
  //     targetdate: targetdate,
  //   },
  // ];
  let v = 0;
  const auth = useAutho();
  const [todos, settodods] = useState([]);
  const [message, setmessage] = useState();
  const usenavi = useNavigate();

  useEffect(() => referTodos(), []); // it will call when empty only
  function referTodos() {
    retriveTodosByUsernameApi(auth.username)
      .then((e) => settodods(e.data))
      .catch((error) => console.log(error));
  }
  function deleteTodo(id) {
    DeleteTodoByidApi(auth.username, id)
      .then(() => {
        setmessage(` Successful Deleted with id ${id}`);
        referTodos();
      })
      .catch((e) => console.log(e));
  }
  function updateTodo(id) {
    usenavi(`/todo/${id}`);
  }
  function AddTodo() {
    //v = 1;
    usenavi("/todo/-1");
  }

  return (
    <div className="container">
      <h2>Thinks you need to Do </h2>
      {message && <div className="alert alert-warning"> {message}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>IsDone</th>
            <th>Target</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {
            // each item is map to individual eleent by map
            todos.map((t) => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>{t.done.toString()}</td>
                <td>{t.targetdate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(t.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateTodo(t.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        <button className="btn btn-success m-5" onClick={AddTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
}
