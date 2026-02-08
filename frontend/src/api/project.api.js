import api from "./axios";

// user routes
  // Fetch all projects
  export const getProjects = () => {
    return api.get("/view-projects");
  };

  // Fetch single project by ID
  export const getProjectById = (id) => {
    return api.get(`/view-project/${id}`);
  };

  
// admin routes





// Default export for backward compatibility
export default getProjects;
