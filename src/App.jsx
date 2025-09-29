import './App.css'
import TodoList from './Components/Todo List/TodoList'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <div className='todo__list flex-1'>
        <TodoList></TodoList>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App
