const Project = (title, description) => {
  const projectDetails = {
    projectTitle: title,
    projectDescrption: description,
    isComplete: false,
  };
  let projectTasks = [];

  return { projectDetails, projectTasks };
};

export default Project;
