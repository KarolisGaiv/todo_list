import "./styles/styles.scss";
import { openModal, closeModal, saveToLocalStorage } from "./ProjectForm";

// Selectors related to "Add Project"
const projectButton = document.querySelector(".project-btn");
const closeProjectBtn = document.querySelector(".modal-close");
const addProjectBtn = document.querySelector(".add-project-btn");

// Event handlers related to "Add Project"
projectButton.addEventListener("click", openModal);
closeProjectBtn.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", saveToLocalStorage);
