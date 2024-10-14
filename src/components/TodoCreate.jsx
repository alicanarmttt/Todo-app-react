import { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

//Object destructing ile onCreateTodo propundan parentdaki createTodo fonksiyonunu maplemiş olduk. (JS)
function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };
  const createTodoRequest = () => {
    //boşsa text bişey yapma.
    if (!newTodo) return;
    //doluysa
    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    //props sayesinde app.jsx deki fonksiyonu kullandık
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="ToDo Giriniz"
      />
      <button onClick={createTodoRequest} className="todo-create-btn">
        To Do Oluştur
      </button>
    </div>
  );
}

TodoCreate.propTypes = {
  onCreateTodo: PropTypes.func.isRequired, // `onCreateTodo` bir fonksiyon olacak ve gereklidir
};

export default TodoCreate;
