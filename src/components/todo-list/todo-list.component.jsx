import React, { useState } from "react";
import "./todo-list.css";

const TodoList = () => {
  const [items, setItems] = useState(["clean", "cook"]);
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setItems([...items, text]);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="To Do Item"
      />
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {items.map(item => (
          <li className="todoItems" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
