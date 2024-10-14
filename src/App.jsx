import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/todoCreate";
import TodoList from "./components/TodoList";

function App() {
  //Tüm todoları toplamak için state. Bütün komponentler görsün diye ana komponent içinde tanımladık.
  const [todos, setTodos] = useState([]);

  //üstteki state'i doldurmak için fonksiyon.
  const createTodo = (newTodo) => {
    //TodoCreate.jsxdeki request createTodo fonksiyonunu çalıştırdı.
    //todos dizinine yeni newTodo'yu ekle.
    setTodos([...todos, newTodo]);
  };

  //silme fonksiyonu oluştur
  //todolist e props olarak oradan da todo ya props olarak aktarıyoruz.
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  console.log(todos);
  return (
    //TodoCreate componentinden app kompenentine geçiş için childdan parenta erişebileceğimiz propsu burada kullanıyoruz.
    <>
      <div className="App">
        <div className="main">
          <TodoCreate onCreateTodo={createTodo}></TodoCreate>
          <TodoList todos={todos} onDeleteTodo={deleteTodo}></TodoList>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
