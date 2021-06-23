import { openTaskForm } from "./TodoForm";
import { createCard } from "./TodoCard";

let projectName;
let projectDescription;
let projectTasks;

function getProjectData(e) {
  const projectKey = e.target.parentElement.previousSibling.innerText;
  const projectData = localStorage.getItem(projectKey);
  projectName = JSON.parse(projectData).projectDetails.projectName;
  projectDescription =
    JSON.parse(projectData).projectDetails.projectDescription;
  projectTasks = JSON.parse(projectData).projectTasks;
  console.log(projectTasks);
}

function createDetailsContainer(name, description, dueDate) {
  const contentWrapper = document.querySelector(".project-details-wrapper");
  // Reset container if project is already open
  if (contentWrapper.innerHTML) {
    contentWrapper.innerHTML = "";
  }
  contentWrapper.classList.add("box");
  const projectName = document.createElement("h3");
  projectName.className = "title is-3 project-name";
  projectName.innerText = name;
  contentWrapper.appendChild(projectName);
  const projectDescription = document.createElement("h4");
  projectDescription.className = "title is-4";
  projectDescription.innerText = `Description: ${description}`;
  contentWrapper.appendChild(projectDescription);
  const addBtn = document.createElement("button");
  addBtn.className = "button add-task-btn";
  addBtn.innerText = "Add Task";
  contentWrapper.appendChild(addBtn);

  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", openTaskForm);
}

function displayProjectTasks() {
  const tasksContainer = document.querySelector(".project-tasks-wrapper");
  // Reset tasks list container before displaying tasks
  if (tasksContainer.innerHTML) {
    tasksContainer.innerHTML = "";
  }
  projectTasks.forEach((task) => {
    createCard(task.taskTitle, task.taskDescription);
  });
}

function populateDetailsContainer(e) {
  getProjectData(e);
  createDetailsContainer(projectName, projectDescription);
  displayProjectTasks();
}

export { populateDetailsContainer };
