import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content, className = "" }) {
  return (
    <div className={`markdown-container ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom styling for headings
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-bold mb-4 text-gray-100" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-2xl font-semibold mb-3 text-gray-100"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-xl font-semibold mb-2 text-gray-200"
              {...props}
            />
          ),

          // Custom styling for paragraphs
          p: ({ ...props }) => (
            <p className="mb-4 text-gray-300 leading-relaxed" {...props} />
          ),

          // Custom styling for lists
          ul: ({ ...props }) => (
            <ul
              className="list-disc list-inside mb-4 space-y-2 text-gray-300"
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              className="list-decimal list-inside mb-4 space-y-2 text-gray-300"
              {...props}
            />
          ),
          li: ({ ...props }) => (
            <li className="ml-4 leading-relaxed" {...props} />
          ),

          // Custom styling for code blocks
          code: ({ inline, ...props }) =>
            inline ? (
              <code
                className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-pink-400"
                {...props}
              />
            ) : (
              <code
                className="block bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4"
                {...props}
              />
            ),

          // Custom styling for blockquotes
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-400"
              {...props}
            />
          ),

          // Custom styling for links
          a: ({ ...props }) => (
            <a className="text-blue-400 hover:underline" {...props} />
          ),

          // Custom styling for strong/bold text
          strong: ({ ...props }) => (
            <strong className="font-bold text-gray-100" {...props} />
          ),

          // Custom styling for emphasis/italic text
          em: ({ ...props }) => (
            <em className="italic text-gray-300" {...props} />
          ),

          // Custom styling for horizontal rules
          hr: ({ ...props }) => (
            <hr className="my-6 border-gray-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
