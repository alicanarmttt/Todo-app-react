import Todo from "../components/Todo";
import PropTypes from "prop-types";

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <div style={{ width: "100%", marginTop: "100px" }}>
      {
        //Eğer todos doluysa tek tek map ile component oluştur
        todos &&
          todos.map((todo) => {
            //almış olduğum todoyu da todo komponentine props olarak geç.
            //todos-->todo
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
              />
            );
          })
      }
    </div>
  );
}

TodoList.propTypes = {
  onUpdateTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired, // `onCreateTodo` bir fonksiyon olacak ve gereklidir
};

export default TodoList;
