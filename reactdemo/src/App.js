import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input></input>
      <button>Add Todo</button>
      <TaskList/>
      <TaskList/>
    </div>
  );
}

export default App;
