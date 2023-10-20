// Initialize an empty array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a Hike.");
    return;
  }

  tasks.push({ text: taskText, complete: false });
  taskInput.value = "";
  displayTasks();
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
<input type="checkbox" onchange="toggleComplete(${i})" ${
      tasks[i].complete ? "checked" : ""
    }>
${tasks[i].text}
<button class="plandel" onclick="deleteTask(${i})">Delete</button>
`;
    taskList.appendChild(taskItem);
  }
}

// Function to toggle task completeness
function toggleComplete(index) {
  tasks[index].complete = !tasks[index].complete;
  displayTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Initial display
displayTasks();