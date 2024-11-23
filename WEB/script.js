// Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Event Listener for Adding Tasks
addTaskButton.addEventListener("click", addTask);

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");

  // Task Text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Complete Task Toggle
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  // Append to List Item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  // Append to Task List
  taskList.appendChild(listItem);

  // Clear Input
  taskInput.value = "";
}
