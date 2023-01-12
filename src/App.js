import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
