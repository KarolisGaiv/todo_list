const test = document.querySelector(".task-list-wrapper");
const projectModal = document.querySelector(".modal");

function openModal() {
  projectModal.classList.add("is-active");
}

function closeModal() {
  projectModal.classList.remove("is-active");
}

export { openModal, closeModal };
