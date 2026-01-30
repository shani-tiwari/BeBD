import { useNavigate } from "react-router";

/**
 * ProjectCard Component
 * Displays a project card with title, description, category, and difficulty
 * Navigates to project details page on click
 */
export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  // Truncate description to max 150 characters
  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

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

  const handleClick = () => {
    navigate(`/project/${project._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 shadow-blue-800/10
      cursor-pointer p-6 border border-gray-700 hover:border-blue-500/20 transform hover:-translate-y-1"
    >
      {/* Header with badges */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}
        >
          {project.category || "General"}
        </span>
        {project.difficulty && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(project.difficulty)}`}
          >
            {project.difficulty}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-4">
        {project.title}
      </h3>

      {/* divider  */}
      <div className="h-px w-[90%] bg-gray-600 mb-2 "></div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {truncateText(project.description)}
      </p>

      {/* Footer with skills count */}
      {project.skills && project.skills.length > 0 && (
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <svg
            className="w-4 h-4"
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
          <span>{project.skills.length} skills</span>
        </div>
      )}

      {/* Likes count if available */}
      {/* {project.likes !== undefined && (
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          <span>
            {project.likes} {project.likes === 1 ? "like" : "likes"}
          </span>
        </div>
      )} */}
    </div>
  );
}
