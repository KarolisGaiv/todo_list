import createProjectCard from "./ProjectCard";

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
  let project = [];
  project.push(projectName.value);
  project.push(projectDescription.value);

  localStorage.setItem(projectName.value, JSON.stringify(project));
  createProjectCard(projectName.value);
  clearFields();
  closeModal();
}

export { openModal, closeModal, saveToLocalStorage };
