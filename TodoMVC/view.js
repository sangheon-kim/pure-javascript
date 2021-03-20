const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ""}>
      <div class="view">
        <input 
          ${completed ? "checked" : ""}
          class="toggle"
          type="checkbox">
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}" />
    </li>
  `;
};

const getTodoCount = (todos) => {
  const { length } = todos.filter((todo) => !todo.completed);

  return `${length} Item left`;
};

export default (targetElement, state) => {
  const { currentFilter, todos } = state;

  console.log(currentFilter);

  const element = targetElement.cloneNode(true);
  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.innerHTML = todos.map(getTodoElement).join("");
  counter.textContent = getTodoCount(todos);

  Array.from(filters.querySelectorAll("li a")).forEach((a) => {
    console.log(a);
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selectd");
    }
  });

  return element;
};
