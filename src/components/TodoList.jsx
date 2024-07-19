import InputField from "./InputField";
import Button from "./Button";
import ListItem from "./ListItem";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [itemId, setItemId] = useState(0);

  const addTodo = (task) => {
    setTodos([...todos, { id: itemId, text: task }]);
    setItemId(itemId + 1);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
                <ListItem text={todo.text} />
                <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
