import "./styles/styles.scss";
import { openModal, closeModal } from "./ProjectForm";

const projectButton = document.querySelector(".project-btn");
const closeProjectBtn = document.querySelector(".modal-close");

projectButton.addEventListener("click", openModal);
closeProjectBtn.addEventListener("click", closeModal);
