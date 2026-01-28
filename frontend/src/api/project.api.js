import api from "./axios";

// Fetch all projects
export const getProjects = () => {
  return api.get("/view-projects");
};

// Fetch single project by ID
export const getProjectById = (id) => {
  return api.get(`/view-project/${id}`);
};

// Default export for backward compatibility
export default getProjects;
