import getTodos from "./getTodos";
import view from "./view";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = view(main, state);

  main.replaceWith(newMain);
});
