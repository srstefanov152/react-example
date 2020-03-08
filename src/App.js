import React, { useState } from "react";
import "./App.css";

import Counter from "./components/counter/counter.component";
import TodoList from "./components/todo-list/todo-list.component";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <h1>Hi !</h1>
      <div>
        <button onClick={() => setLogged(true)}>Log in</button>
        <button onClick={() => setLogged(false)}>Log out</button>
        <p>Logged in: {logged ? `true` : `false`}</p>
      </div>
      <Counter logged={logged} />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
