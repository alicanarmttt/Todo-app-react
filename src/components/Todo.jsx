import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const { id, content } = todo;
  //update butonu için tıklandığında inputu getiren state.
  const [editable, setEditable] = useState(false);
  //input içinde değişikliği içinde tutacağımız state.
  const [editTodo, setEditTodo] = useState(content);

  const updateTodo = () => {
    //todo'nun yeni halini request olarak tut.
    const request = {
      id: id,
      content: editTodo,
    };
    //props olarak getirdiğimiz fonksiyonu çağır.
    onUpdateTodo(request);
    //inputu kapat ve iconu değiştir.
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        padding: "10px",
      }}
    >
      <div>
        <div>
          {/* tıklandığında inputu getir.  */}
          {editable ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todo-input"
              type="text"
              style={{ width: "380px" }}
            />
          ) : (
            content
          )}
        </div>
      </div>
      <div>
        <IoIosRemoveCircle
          onClick={() => onDeleteTodo(id)}
          className="todo-icons"
        />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          //tıklandığında inputun ortaya çıkması için fonksiyonu çağır.
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}
Todo.propTypes = {
  onUpdateTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired, // `onCreateTodo` bir fonksiyon olacak ve gereklidir
};

export default Todo;
