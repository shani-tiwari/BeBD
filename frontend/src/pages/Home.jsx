import React, { useState, useEffect } from "react";
import { getProjects } from "../api/project.api";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "coming-soon", label: "Coming Soon" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await getProjects();
        setProjects(response.data.Projects || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      if (activeCategory === "coming-soon") return false;
      const projectCategory = project.category?.toLowerCase();
      return projectCategory === activeCategory;
    });
  }, [projects, activeCategory]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-[100vw]  bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-4xl font-extrabold mb-4 bg-linear-to-b bg-clip-text text-transparent from-blue-300 to-indigo-600">
            Level Up Your Development Skills
          </h1>
          <p className="text-balance md:text-xl text-gray-400 max-w-2xl mx-auto">
            Choose a category to find challenging projects with detailed
            implementation plans and resources.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls="project-grid"
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30 ring-2 ring-blue-500"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid or Empty State */}
        <div id="project-grid" role="tabpanel" aria-labelledby={activeCategory}>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-gray-800 rounded-3xl shadow-sm border border-gray-700">
              <div className="text-6xl mb-6 text-gray-600">🚀</div>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Coming Soon!
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                We're currently working on exciting new{" "}
                {activeCategory === "coming-soon" ? "" : activeCategory}{" "}
                projects. Stay tuned for updates!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
