import { doc } from "prettier";

function createCard(title, description) {
  const card = document.createElement("div");
  card.className = "card";
  const cardHeader = document.createElement("header");
  cardHeader.className = "card-header";
  card.appendChild(cardHeader);
  const headerTitle = document.createElement("p");
  headerTitle.className = "card-header-title";
  headerTitle.innerText = title;
  cardHeader.appendChild(headerTitle);
  const expandBtn = document.createElement("button");
  expandBtn.className = "card-header-icon";
  expandBtn.setAttribute("aria-label", "more options");
  cardHeader.appendChild(expandBtn);
  const expandIconPlaceholder = document.createElement("span");
  expandIconPlaceholder.className = "icon";
  expandBtn.appendChild(expandIconPlaceholder);
  const expandIcon = document.createElement("i");
  expandIcon.className = "fas fa-angle-down";
  expandIcon.setAttribute("aria-hidden", "true");
  expandIconPlaceholder.appendChild(expandIcon);
  const cardContentWrapper = document.createElement("div");
  cardContentWrapper.className = "card-content is-hidden task-card-content";
  card.appendChild(cardContentWrapper);
  const content = document.createElement("div");
  content.className = "content";
  content.innerText = `Description: ${description}`;
  cardContentWrapper.appendChild(content);
  const cardFooter = document.createElement("footer");
  cardFooter.className = "card-footer is-hidden task-card-footer";
  card.appendChild(cardFooter);
  const completeBtn = document.createElement("button");
  completeBtn.className = "button complete-todo";
  completeBtn.innerText = "Complete";
  cardFooter.appendChild(completeBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button";
  deleteBtn.innerText = "Delete";
  cardFooter.appendChild(deleteBtn);

  const tasksContainer = document.querySelector(".project-tasks-wrapper");
  tasksContainer.appendChild(card);

  expandBtn.addEventListener("click", expandCard);

  const completeBtns = document.querySelectorAll(".complete-todo");
  // completeBtns.forEach((button) => {
  //   button.addEventListener("click", completeTask);
  // });
  // completeBtn.addEventListener("click", completeTask);
}

function expandCard(e) {
  const cardContent = e.currentTarget.parentElement.parentElement.childNodes[1];
  const cardFooter = e.currentTarget.parentElement.parentElement.childNodes[2];
  cardContent.classList.toggle("is-hidden");
  cardFooter.classList.toggle("is-hidden");
}

// function completeTask(e) {
//   const projId = document.querySelector(".project-name").innerText;
//   const projectData = JSON.parse(localStorage.getItem(projId));
//   const taskName = e.target.parentElement.parentElement.firstChild.innerText;

//   const taskIndex = projectData.projectTasks.findIndex(
//     (task) => task.taskTitle === taskName
//   );

//   const isComplete =
//     projectData.projectTasks[taskIndex].taskPriority === false ? true : false;

//   // const taskPriority =
//   //   projectData.projectTasks[taskIndex].taskPriority === "regular"
//   //     ? "urgent"
//   //     : "regular";

//   const updatedTask = {
//     ...projectData.projectTasks[taskIndex],
//     isComplete,
//   };

//   console.log(updatedTask);

//   const updatedProjectArray = [
//     ...projectData.projectTasks.slice(0, taskIndex),
//     updatedTask,
//     ...projectData.projectTasks.slice(taskIndex + 1),
//   ];

//   // console.log(projectData.projectTasks);

//   // console.log(updatedProjectArray);

//   projectData.projectTasks = updatedProjectArray;

//   // console.log(projectData.projectTasks);
//   // localStorage.setItem(projId, JSON.stringify(projectData));
// }

export { createCard };
