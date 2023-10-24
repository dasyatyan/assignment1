// Function to animate a moving element
function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const windowWidth = window.innerWidth - elem.clientWidth;
    
    function animate() {
      if (pos >= windowWidth) {
        pos = -elem.clientWidth; // Reset the position to the beginning
      } else {
        pos += 4; // Increase the position to move the element
      } 
      elem.style.left = pos + 'px'; // Update the element's position
      requestAnimationFrame(animate); // Recursively call the function for animation
    }
    
    animate(); // Start the animation
  }
 
 
  
  // Initialize an empty array to store tasks
  let tasks = [];
  
  // Function to add a new task to the task list
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a Hike."); // Show an alert if the input is empty
      return;
    }
  
    tasks.push({ text: taskText, complete: false });
    taskInput.value = ""; // Clear the input field
    displayTasks(); // Update the displayed task list
  }
  
  // Function to display tasks in the task list
  function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the task list content
  
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
    tasks[index].complete = !tasks[index].complete; // Toggle the task's completeness
    displayTasks(); // Update the displayed task list
  }
  
  // Function to delete a task from the task list
  function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    displayTasks(); // Update the displayed task list
  }
  
  // Initial display of tasks
  displayTasks();
  