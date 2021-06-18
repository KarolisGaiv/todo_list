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

function createDetailsContainer(name, description) {
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "box";
  const projectName = document.createElement("h3");
  projectName.className = "title is-3 project-name";
  projectName.innerText = name;
  detailsContainer.appendChild(projectName);
  const projectDescription = document.createElement("h4");
  projectDescription.className = "title is-4";
  projectDescription.innerText = description;
  detailsContainer.appendChild(projectDescription);
  const addBtn = document.createElement("button");
  addBtn.className = "button add-task-btn";
  addBtn.innerText = "Add Task";
  detailsContainer.appendChild(addBtn);

  const contentWrapper = document.querySelector(".project-details-wrapper");
  contentWrapper.appendChild(detailsContainer);

  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", openTaskForm);
}

function displayProjectTasks() {
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
