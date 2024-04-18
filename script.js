document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const todoText = input.value.trim();

    if (todoText !== '') {
      const li = document.createElement('li');
      li.textContent = todoText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.classList.add('delete-button');
      li.appendChild(deleteButton);

      todoList.appendChild(li);
      input.value = '';
    }
  });

  todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
      const li = event.target.closest('li');
      li.remove();
    }
  });
});

// Sort

document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.getElementById('todo-list');
  const sortButton = document.querySelector('.sort-button');
  let ascendingOrder = true;

  sortButton.addEventListener('click', function () {
    sortListItems();
  });

  function sortListItems() {
    const items = Array.from(todoList.getElementsByTagName('li'));

    items.sort((a, b) => {
      const textA = a.textContent.trim().toLowerCase();
      const textB = b.textContent.trim().toLowerCase();
      if (ascendingOrder) {
        return textA.localeCompare(textB);
      } else {
        return textB.localeCompare(textA);
      }
    });

    items.forEach(item => item.remove());
    items.forEach(item => todoList.appendChild(item));

    ascendingOrder = !ascendingOrder;
  }
});