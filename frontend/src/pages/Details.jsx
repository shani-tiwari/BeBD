import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getProjectById } from "../api/project.api";
import MarkdownRenderer from "../components/MarkdownRenderer";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProjectById(id);
        setProject(response.data.Project);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err.response?.data?.msg || "Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="h-screen max-w-[100vw] bg-gray-900 py-8 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">
            Error Loading Project
          </h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // No project found
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Project not found</p>
        </div>
      </div>
    );
  }

  // Get category badge color
  const getCategoryColor = (category) => {
    const colors = {
      frontend: "bg-blue-900 text-blue-300",
      backend: "bg-green-900 text-green-300",
      fullstack: "bg-purple-900 text-purple-300",
      development: "bg-indigo-900 text-indigo-300",
    };
    return colors[category?.toLowerCase()] || "bg-gray-700 text-gray-300";
  };

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    const colors = {
      easy: "bg-emerald-900 text-emerald-300",
      medium: "bg-yellow-900 text-yellow-300",
      hard: "bg-red-900 text-red-300",
    };
    return colors[difficulty?.toLowerCase()] || "bg-gray-700 text-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        {/* Main content card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          {/* Header with badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(project.category)}`}
            >
              {project.category || "General"}
            </span>
            {project.difficulty && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(project.difficulty)}`}
              >
                {project.difficulty}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-gray-100">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8 border-b border-gray-700 pb-6">
            {project.description}
          </p>

          {/* Skills Section */}
          {project.skills && project.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Skills Required
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Learning Outcomes */}
          {project.learn && project.learn.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                What You'll Learn
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.learn.map((item, index) => (
                  <li key={index} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Implementation Plan */}
          {project.implementationPlan && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2 border-t border-gray-700 pt-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Implementation Plan
              </h2>
              <div className="bg-gray-900 rounded-lg p-6">
                <MarkdownRenderer content={project.implementationPlan} />
              </div>
            </div>
          )}

          {/* Resources Section */}
          {project.resources && project.resources.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Resources
              </h2>
              <div className="space-y-3">
                {project.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-100">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-400">{resource.type}</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          {/* <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              {project.version && <span>Version: {project.version}</span>}
              {project.status && (
                <span>
                  Status: <span className="capitalize">{project.status}</span>
                </span>
              )}
              {project.slug && <span>Slug: {project.slug}</span>}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
