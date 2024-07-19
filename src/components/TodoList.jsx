import axios from "axios";
import InputField from "./InputField";
import Button from "./Button";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => {
        console.log("There is an error while fetching it", error);
      });
  }, []);

  const addTodo = (task) => {
    axios
      .post("http://127.0.0.1:3000/todos", { task, completed: false })
      .then((response) => {
        console.log(response.data);
        setTodos([...todos, response.data]);
        console.log("added");
      })
      .catch((error) => {
        console.log("There is an error while creating new entry", error);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.log("There is an error while deleting the entry", error);
      });
  };

  return (
    <div className="bg-slate-800 h-screen flex justify-around items-center">
      <div className="text-white bg-slate-900 w-[500px] rounded p-12 pt-6">
        <div className="flex flex-col items-center w-full">
          <div className="text-3xl font-bold mb-8">TODO LIST</div>
          <div className="w-full">
            <InputField addTodo={addTodo} />
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="grid grid-flow-col items-center gap-8">
                <ListItem text={todo.task} />
                <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
