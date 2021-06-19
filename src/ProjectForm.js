import { createProjectCard } from "./ProjectCard";
import Project from "./Project";

const projectModal = document.querySelector(".project-form");
const projectName = document.querySelector(".project-name-field");
const projectDescription = document.querySelector(".project-description-field");

function openModal() {
  projectModal.classList.add("is-active");
}

function closeModal() {
  projectModal.classList.remove("is-active");
}

function clearFields() {
  projectName.value = "";
  projectDescription.value = "";
}

function saveToLocalStorage() {
  let project = new Project();
  project.projectDetails.projectName = projectName.value;
  project.projectDetails.projectDescription = projectDescription.value;

  localStorage.setItem(
    project.projectDetails.projectName,
    JSON.stringify(project)
  );
  createProjectCard(projectName.value);
  clearFields();
  closeModal();
}

export { openModal, closeModal, saveToLocalStorage };
