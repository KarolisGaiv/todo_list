function createProjectCard(projectName) {
  const projectList = document.querySelector(".project-list");

  const projectCard = document.createElement("div");
  projectCard.className = "card";
  const cardContentWrapper = document.createElement("div");
  cardContentWrapper.className = "card-content";
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
  completeBtn.innerText = "Complete";
  cardFooter.appendChild(completeBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button delete-proj-btn";
  deleteBtn.innerText = "Delete";
  cardFooter.appendChild(deleteBtn);

  projectList.appendChild(projectCard);
}

function deleteProject(e) {
  const projId = e.target.parentElement.parentElement.firstChild.innerText;
  localStorage.removeItem(projId);
}

function completeProject(e) {
  const projId = e.target.parentElement.parentElement.firstChild.innerText;
  const selectedProject = JSON.parse(localStorage.getItem(projId));
  selectedProject.projectDetails.isComplete =
    !selectedProject.projectDetails.isComplete;
  e.target.parentElement.parentElement.firstChild.style.textDecoration =
    "line-through";
  localStorage.setItem(projId, JSON.stringify(selectedProject));
}

export { createProjectCard, deleteProject, completeProject };
