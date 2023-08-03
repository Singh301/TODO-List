// Global array to store the tasks
let tasks = [];

// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a valid task.');
    return;
  }

  tasks.push(taskText);
  taskInput.value = '';
  renderTasks();
}

// Function to display the tasks on the page
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerText = task;
    li.setAttribute('data-index', index);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initialize the task list
renderTasks();
