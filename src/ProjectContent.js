import { openTaskForm } from "./TodoForm";

let projectName;
let projectDescription;

function getProjectData(e) {
  const projectKey = e.target.parentElement.previousSibling.innerText;
  const projectData = localStorage.getItem(projectKey);
  projectName = JSON.parse(projectData)[0];
  projectDescription = JSON.parse(projectData)[1];
}

function createDetailsContainer(name, description) {
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "box";
  const projectName = document.createElement("h3");
  projectName.className = "title is-3";
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

  const contentWrapper = document.querySelector(".project-content-wrapper");
  contentWrapper.appendChild(detailsContainer);

  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", openTaskForm);
}

function populateDetailsContainer(e) {
  getProjectData(e);
  createDetailsContainer(projectName, projectDescription);
}

export { populateDetailsContainer };
