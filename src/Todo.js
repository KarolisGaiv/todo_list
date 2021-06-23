const Todo = (title, description, priority) => {
  let taskTitle = title;
  let taskDescription = description;
  let taskPriority = priority;
  let isComplete = false;
  const projectId = document.querySelector(".project-name").innerText;

  function saveTaskToProject() {
    let task = {
      taskTitle,
      taskDescription,
      taskPriority,
      isComplete,
    };

    const selectedProject = JSON.parse(localStorage.getItem(projectId));
    selectedProject.projectTasks.push(task);
    localStorage.setItem(projectId, JSON.stringify(selectedProject));
  }

  return { saveTaskToProject };
};

export default Todo;
