document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to create a new task element
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const controls = document.createElement("div");
    controls.className = "task-controls";

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔";
    completeBtn.title = "Mark as complete";
    completeBtn.onclick = () => {
      li.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑";
    deleteBtn.title = "Delete task";
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };

    controls.appendChild(completeBtn);
    controls.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(controls);

    return li;
  }

  // Add task on button click
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskElement = createTaskElement(taskText);
      taskList.appendChild(taskElement);
      taskInput.value = "";
    }
  });

  // Add task on Enter key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
