const taskForm = document.querySelector(".task-form");
const closeFormBtn = document.querySelector(".close-task-form");

closeFormBtn.addEventListener("click", closeTaskForm);

function openTaskForm() {
  taskForm.classList.add("is-active");
}

function closeTaskForm() {
  taskForm.classList.remove("is-active");
}

export { openTaskForm };
