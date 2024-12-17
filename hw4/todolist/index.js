// class API {
//   baseUrl = "https://jsonplaceholder.typicode.com";
//   todoUrl = "todos";

//   getTodos = () => {
//     return fetch([this.baseUrl, this.todoUrl].join("/"))
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };
// }
// new API().getTodos();

import { Controller } from "./mvc/controller.js";

Controller.bootstrap();
