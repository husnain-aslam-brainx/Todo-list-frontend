import { useState } from "react";
import Button from "./Button";

export default function InputField({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
    console.log("ITs me in the loooooog");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-flow-col gap-8 mb-8 text-black"
    >
      <input
        type="text"
        className="rounded-2xl p-2 col-span-5"
        placeholder="Type something"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
