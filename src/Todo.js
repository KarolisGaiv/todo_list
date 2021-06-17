const Todo = (title, description, dueDate, priority) => {
  let taskTitle = title;
  let taskDescription = description;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  const projectId = document.querySelector(".project-name").innerText;

  function saveTaskToProject() {
    let task = { taskTitle, taskDescription, taskDueDate, taskPriority };

    const selectedProject = JSON.parse(localStorage.getItem(projectId));
    selectedProject.projectTasks.push(task);
    localStorage.setItem(projectId, JSON.stringify(selectedProject));
  }

  return { saveTaskToProject };
};

export default Todo;
