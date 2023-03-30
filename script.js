const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = input.value.trim();
  if (taskText === '') {
    return;
  }
  const task = createTask(taskText);
  taskList.appendChild(task);
  input.value = '';
});

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
});

function createTask(taskText) {
  const li = document.createElement('li');
  const taskTextElement = document.createElement('span');
  const deleteBtn = document.createElement('button');
  taskTextElement.textContent = taskText;
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  li.appendChild(taskTextElement);
  li.appendChild(deleteBtn);
  return li;
}
