import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import PropTypes from "prop-types";

function Todo({ todo, onDeleteTodo }) {
  const { id, content } = todo;

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
        <div>{content}</div>
      </div>
      <div>
        <IoIosRemoveCircle
          onClick={() => onDeleteTodo(id)}
          className="todo-icons"
        />
        <FaEdit className="todo-icons" />
      </div>
    </div>
  );
}
Todo.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired, // `onCreateTodo` bir fonksiyon olacak ve gereklidir
};

export default Todo;
