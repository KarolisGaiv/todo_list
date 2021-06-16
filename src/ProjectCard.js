function createCard(projectName) {
  const projectList = document.querySelector(".project-list");

  const projectCard = document.createElement("div");
  projectCard.className = "card";
  const cardContentWrapper = document.createElement("div");
  cardContentWrapper.className = "card-content";
  projectCard.appendChild(cardContentWrapper);
  const cardContent = document.createElement("div");
  cardContent.className = "content";
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
  completeBtn.className = "button";
  completeBtn.innerText = "Complete";
  cardFooter.appendChild(completeBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button";
  deleteBtn.innerText = "Delete";
  cardFooter.appendChild(deleteBtn);

  projectList.appendChild(projectCard);
}

export default createCard;
