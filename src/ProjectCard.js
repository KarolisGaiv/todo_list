import { populateDetailsContainer } from "./ProjectContent";

function createProjectCard(projectName, isComplete) {
  const projectCard = document.createElement("div");
  projectCard.className = "block card";
  const cardContentWrapper = document.createElement("div");
  cardContentWrapper.className = isComplete
    ? "card-content -complete"
    : "card-content";
  projectCard.appendChild(cardContentWrapper);
  const cardContent = document.createElement("h4");
  cardContent.className = "title is-4";
  cardContent.innerText = projectName;
  cardContentWrapper.appendChild(cardContent);
  const cardFooter = document.createElement("footer");
  cardFooter.className = "card-footer";
  projectCard.appendChild(cardFooter);
  const openBtn = document.createElement("button");
  openBtn.className = "button open-project-btn";
  openBtn.innerText = "Open";
  cardFooter.appendChild(openBtn);
  const completeBtn = document.createElement("button");
  completeBtn.className = "button complete-proj-btn";
  completeBtn.innerText = isComplete ? "Incomplete" : "Complete";
  cardFooter.appendChild(completeBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button delete-proj-btn";
  deleteBtn.innerText = "Delete";
  cardFooter.appendChild(deleteBtn);

  const projectList = document.querySelector(".project-list");
  projectList.appendChild(projectCard);

  openBtn.addEventListener("click", populateDetailsContainer);
  deleteBtn.addEventListener("click", (e) => {
    deleteProject(e);
    const projectListContainer = document.querySelector(".project-list");
    //  Reset project list container before updating list when project is deleted
    projectListContainer.innerHTML = "";
    displaySavedProjects();
  });
  completeBtn.addEventListener("click", (e) => {
    completeProject(e);
    const projectListContainer = document.querySelector(".project-list");
    //  Reset project list container before updating list when project is deleted
    projectListContainer.innerHTML = "";
    displaySavedProjects();
  });
}

function displaySavedProjects() {
  let projectKeys = Object.keys(localStorage);
  for (let i = 0; i < projectKeys.length; i++) {
    const projectName = projectKeys[i];
    const projectData = JSON.parse(localStorage.getItem(projectName));
    const projectStatus = projectData.projectDetails.isComplete;
    createProjectCard(projectName, projectStatus);
  }
}

function deleteProject(e) {
  const projId = e.target.parentElement.parentElement.firstChild.innerText;
  localStorage.removeItem(projId);
}

function completeProject(e) {
  const projId = e.target.parentElement.parentElement.firstChild.innerText;
  const selectedProject = JSON.parse(localStorage.getItem(projId));
  const projectCard = document.querySelector(".card-content");
  selectedProject.projectDetails.isComplete =
    !selectedProject.projectDetails.isComplete;
  projectCard.classList.add("-complete");
  localStorage.setItem(projId, JSON.stringify(selectedProject));
}

export {
  createProjectCard,
  deleteProject,
  completeProject,
  displaySavedProjects,
};
