// Task array to store tasks
let tasks = [];

// Function to add a new task to the list
function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const taskTitle = newTaskInput.value.trim();
  if (taskTitle === "") return;

  const newTask = {
    title: taskTitle,
    dateAdded: new Date(),
    completed: false,
  };

  tasks.push(newTask);
  newTaskInput.value = "";
  showTasks();
}

// Function to display tasks in the UI
function showTasks() {
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");

  // Clear previous tasks
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.title} (Added: ${task.dateAdded.toLocaleString()})</span>
      <button onclick="toggleComplete(${index})">${task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    if (task.completed) {
      completedList.appendChild(listItem);
    } else {
      pendingList.appendChild(listItem);
    }
  });
}

// Function to toggle task completion status
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

// Function to edit a task
function editTask(index) {
  const newTitle = prompt("Edit task:", tasks[index].title);
  if (newTitle !== null && newTitle.trim() !== "") {
    tasks[index].title = newTitle.trim();
    showTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

// Show tasks on initial load
showTasks();