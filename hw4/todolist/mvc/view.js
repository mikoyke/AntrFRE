export const View = (() => {
  const domstr = {
    inputBox: "todolist-input",
    listContainer: "todolist-container",
    deleteBtn: "delete-btn",
    todoTitle: "todo-title",
  };

  const createTmp = (todoArr) => {
    let tmp = "";
    todoArr.forEach((todo) => {
      tmp += `
        <li>
          <span class='todo-title' id=${todo.id}>${todo.id} ${todo.title}</span>
          <button class ='delete-btn' id=${todo.id}> X </button>
        </li>
      `;
    });
    return tmp;
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };
  return { domstr, render, createTmp };
})();
