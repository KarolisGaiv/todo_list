const cardText = document.querySelector(".content");
// let savedProjects = [];

// function getProjects() {
//   keys = Object.keys(localStorage);

//   for (var i = 0; i < keys.length; i++) {
//     const projectName = keys[i];
//     savedProjects.push(projectName);
//     return savedProjects;
//   }
// }

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
  const openBtn = document.createElement("a");
  openBtn.setAttribute("href", "#");
  openBtn.className = "card-footer-item";
  openBtn.innerText = "Open";
  cardFooter.appendChild(openBtn);
  const completeBtn = document.createElement("a");
  completeBtn.setAttribute("href", "#");
  completeBtn.className = "card-footer-item";
  completeBtn.innerText = "Complete";
  cardFooter.appendChild(completeBtn);
  const deleteBtn = document.createElement("a");
  deleteBtn.setAttribute("href", "#");
  deleteBtn.className = "card-footer-item";
  deleteBtn.innerText = "Delete";
  cardFooter.appendChild(deleteBtn);

  projectList.appendChild(projectCard);
}

export { createCard };
