const Project = (title, description) => {
  const projectDetails = {
    projectTitle: title,
    projectDescrption: description,
  };
  let projectTasks = [];

  return { projectDetails, projectTasks };
};

export default Project;
