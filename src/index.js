import "./styles/styles.scss";
import { openModal, closeModal, saveToLocalStorage } from "./ProjectForm";
import { displaySavedProjects } from "./ProjectCard";

displaySavedProjects();

// Selectors related to "Add Project form"
const projectFormButton = document.querySelector(".project-btn");
const closeProjectBtn = document.querySelector(".modal-close");
const addProjectBtn = document.querySelector(".add-project-btn");

// Event handlers related to "Add Project form"
projectFormButton.addEventListener("click", openModal);
closeProjectBtn.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", saveToLocalStorage);
