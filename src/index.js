import "./styles/styles.scss";
import { openModal, closeModal, saveToLocalStorage } from "./ProjectForm";
import {
  createProjectCard,
  deleteProject,
  completeProject,
} from "./ProjectCard";
import { populateDetailsContainer } from "./ProjectContent";

function displaySavedProjects() {
  let projectKeys = Object.keys(localStorage);
  for (let i = 0; i < projectKeys.length; i++) {
    const projectName = projectKeys[i];
    createProjectCard(projectName);
  }
}

displaySavedProjects();

// Selectors related to "Add Project"
const projectFormButton = document.querySelector(".project-btn");
const closeProjectBtn = document.querySelector(".modal-close");
const addProjectBtn = document.querySelector(".add-project-btn");

// Event handlers related to "Add Project"
projectFormButton.addEventListener("click", openModal);
closeProjectBtn.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", saveToLocalStorage);

// Selectors related to project card buttons
const openProjectBtns = document.querySelectorAll(".open-project-btn");
const deleteProjectBtns = document.querySelectorAll(".delete-proj-btn");
const completeProjectBtns = document.querySelectorAll(".complete-proj-btn");

// Event handlers related to project card buttons
openProjectBtns.forEach((button) => {
  button.addEventListener("click", populateDetailsContainer);
});

deleteProjectBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    deleteProject(e);
    const projectListContainer = document.querySelector(".project-list");
    // Reset project list container before updating list when project is deleted
    projectListContainer.innerHTML = "";
    displaySavedProjects();
  });
});

completeProjectBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    completeProject(e);
  });
});
