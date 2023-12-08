document.addEventListener('DOMContentLoaded', function () {
  const elements = {
    todoList: document.getElementById('todoList'),
    spinner: document.getElementById('spinner'),
    loadingText: document.getElementById('loadingText'),
    submitBtn: document.getElementById('submit'),
    titleInput: document.getElementById('title'),
    completed: document.getElementById('completed'),
    error: document.getElementById('error'),
    checkbox: document.getElementById('completed'),
    completedLabel: document.querySelector('label[for="completed"]'),
  };

  function renderTodoItem(item) {
    const listItem = document.createElement('li');
    if (item.completed) {
      listItem.classList.add('checked');
      listItem.innerHTML = `<i class="fa fa-check-square-o"></i><span>${item.title}</span>`;
    } else {
      listItem.innerHTML = `<i class="fa fa-square-o"></i><span>${item.title}</span>`;
    }
    elements.todoList.appendChild(listItem);
  }

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        elements.spinner.style.display = 'none';
        elements.todoList.style.display = 'block';
        data.forEach(renderTodoItem);
      })
      .catch((error) => {
        elements.spinner.style.display = 'none';
        elements.loadingText.style.display = 'block';
        elements.loadingText.textContent = 'Error loading data';
        console.error('Error:', error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const title = elements.titleInput.value.trim();
    if (title) {
      elements.error.style.display = 'none';
      const listItem = document.createElement('li');
      if (elements.completed.checked) {
        listItem.classList.add('checked');
        listItem.innerHTML = `<i class="fa fa-check-square-o"></i><span>${title}</span>`;
      } else {
        listItem.innerHTML = `<i class="fa fa-square-o"></i><span>${title}</span>`;
      }
      elements.todoList.appendChild(listItem);
      elements.titleInput.value = '';
      elements.completedLabel.innerHTML = `<i class="fa fa-square-o"></i><span>I have completed</span>`;
    } else {
      elements.error.style.display = 'block';
    }
  }

  function updateCheckboxLabel() {
    elements.completedLabel.innerHTML = `<i class="fa ${
      elements.completed.checked ? 'fa-check-square-o' : 'fa-square-o'
    }"></i><span>I have completed</span>`;
  }

  elements.checkbox.addEventListener('change', updateCheckboxLabel);
  elements.submitBtn.addEventListener('click', handleSubmit);

  fetchData();
});
