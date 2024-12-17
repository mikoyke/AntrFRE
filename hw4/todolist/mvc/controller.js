import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
  const state = new model.State();
  const todoContainer = document.querySelector(`.${view.domstr.listContainer}`);

  const init = () => {
    model.getTodos().then((todolist) => {
      state.setTodolist = todolist.reverse();
    });
  };

  const deleteTodo = () => {
    todoContainer.addEventListener("click", (e) => {
      //bubbling
      if (e.target.className === view.domstr.deleteBtn) {
        state.setTodolist = state.todolist.filter(
          (todo) => +todo.id !== +e.target.id
        );
        model.deleteTodo(e.target.id);
      }
    });
  };

  const completeTodo = () => {
    todoContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains(view.domstr.todoTitle)) {
        if (e.target.classList.contains("checked")) {
          e.target.classList.remove("checked");
        } else {
          e.target.classList.toggle("checked");
        }
      }
    });
  };

  const addTodo = () => {
    const inputbox = document.querySelector(`.${view.domstr.inputBox}`);
    inputbox.addEventListener("keyup", (e) => {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        const newTodo = new model.Todo(e.target.value);
        model.addTodo(newTodo).then((todo) => {
          state.setTodolist = [todo, ...state.todolist];
        });

        e.target.value = "";
      }
    });
  };
  const bootstrap = () => {
    init();
    deleteTodo();
    addTodo();
    completeTodo();
  };

  return { bootstrap };
})(Model, View);
