// I was still having a difficult time setting this app up on my own, and knowing when and where to use components so this code was mostly copied from Brian Design on YouTube...

import React from 'react';
import './App.css';
import Todolist from './Components/Todolist';

function App() {

  return (
    <div className="todo-app">
      <Todolist />
    </div>
  );
}

export default App;
