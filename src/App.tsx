import React from 'react';
import UsersList from "./components/UsersList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
      <div>
          <UsersList/>
          <hr/>
          <TodoList/>
      </div>
  );
};

export default App;
