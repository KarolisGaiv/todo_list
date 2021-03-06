import Todo from "./Todo";
import { createCard } from "./TodoCard";

const taskForm = document.querySelector(".task-form");
const closeFormBtn = document.querySelector(".close-task-form");
const createTaskBtn = document.querySelector(".create-task");
const title = document.querySelector(".task-name-field");
const description = document.querySelector(".task-description-field");
const priority = document.querySelector(".task-priority");

closeFormBtn.addEventListener("click", closeTaskForm);
createTaskBtn.addEventListener("click", createTodo);

function openTaskForm() {
  taskForm.classList.add("is-active");
}

function closeTaskForm() {
  taskForm.classList.remove("is-active");
}

function createTodo() {
  const newTask = Todo(title.value, description.value, priority.value);
  newTask.saveTaskToProject();
  createCard(title.value, description.value, priority.value);
  resetForm();
  closeTaskForm();
}

function resetForm() {
  title.value = "";
  description.value = "";
}

export { openTaskForm };
