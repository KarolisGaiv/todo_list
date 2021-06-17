const taskForm = document.querySelector(".task-form");

function openTaskForm() {
  taskForm.classList.add("is-active");
}

function closeTaskForm() {
  taskForm.classList.remove("is-active");
}

export { openTaskForm, closeTaskForm };
