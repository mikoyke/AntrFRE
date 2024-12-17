export const API = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const todoUrl = "todos";

  const getTodos = () =>
    fetch([baseUrl, todoUrl].join("/")).then((response) => response.json());

  const addTodo = (newtodo) =>
    fetch([baseUrl, todoUrl].join("/"), {
      method: "POST",
      body: JSON.stringify(newtodo),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    }).then((res) => res.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, todoUrl, id].join("/"), {
      method: "DELETE",
    });

  const completeTodo = (id) =>
    fetch([baseUrl, todoUrl, id].join("/"), {
      method: "PUT",
    }).then((res) => res.json());
  return {
    getTodos,
    deleteTodo,
    addTodo,
    completeTodo,
  };
})();
