function createCard(title, description, priority) {
  const card = document.createElement("div");
  card.className = "card todo-card";
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
  content.className = "block";
  content.innerText = `Description: ${description}`;
  cardContentWrapper.appendChild(content);
  const priorityInfo = document.createElement("div");
  priorityInfo.className = "block";
  priorityInfo.innerText = `Priority: ${priority}`;
  cardContentWrapper.appendChild(priorityInfo);
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
  completeBtn.addEventListener("click", completeTask);
  deleteBtn.addEventListener("click", deleteTask);
}

function expandCard(e) {
  const cardContent = e.currentTarget.parentElement.parentElement.childNodes[1];
  const cardFooter = e.currentTarget.parentElement.parentElement.childNodes[2];
  cardContent.classList.toggle("is-hidden");
  cardFooter.classList.toggle("is-hidden");
}

function completeTask(e) {
  const projId = document.querySelector(".project-name").innerText;
  const projectData = JSON.parse(localStorage.getItem(projId));
  const taskName = e.target.parentElement.parentElement.firstChild.innerText;
  const taskIndex = projectData.projectTasks.findIndex(
    (task) => task.taskTitle === taskName
  );
  const currentTask = projectData.projectTasks[taskIndex];

  const isComplete = currentTask.isComplete === false ? true : false;

  const updatedTask = {
    ...currentTask,
    isComplete,
  };

  const updatedProjectArray = [
    ...projectData.projectTasks.slice(0, taskIndex),
    updatedTask,
    ...projectData.projectTasks.slice(taskIndex + 1),
  ];

  projectData.projectTasks = updatedProjectArray;
  localStorage.setItem(projId, JSON.stringify(projectData));
}

function deleteTask(e) {
  const projId = document.querySelector(".project-name").innerText;
  const projectData = JSON.parse(localStorage.getItem(projId));
  let projectTasks = projectData.projectTasks;
  const taskName = e.target.parentElement.parentElement.firstChild.innerText;
  const taskIndex = projectTasks.findIndex(
    (task) => task.taskTitle === taskName
  );
  const tasksContainer = document.querySelector(".project-tasks-wrapper");

  const updatedTaskArray =
    projectTasks.length > 1
      ? projectTasks.splice(taskIndex, 1)
      : (projectTasks.length = 0);
  projectTasks = updatedTaskArray;
  localStorage.setItem(projId, JSON.stringify(projectData));
  // Reset task list container before updating project tasks
  if (tasksContainer.innerHTML) {
    tasksContainer.innerHTML = "";
  }
  displayProjectTasks();
}

function displayProjectTasks() {
  const projId = document.querySelector(".project-name").innerText;
  const projectData = JSON.parse(localStorage.getItem(projId));
  const projectTasks = projectData.projectTasks;
  projectTasks.forEach((task) => {
    createCard(task.taskTitle, task.taskDescription);
  });
}

export { createCard };
