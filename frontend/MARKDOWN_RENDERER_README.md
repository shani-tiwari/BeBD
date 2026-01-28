# MarkdownRenderer Component

A reusable React component for rendering markdown content with beautiful, customizable styling using `react-markdown` and Tailwind CSS.

## Features

- ✨ Beautiful default styling with Tailwind CSS
- 🌓 Dark mode support
- 📝 GitHub Flavored Markdown (GFM) support
- 🎨 Customizable styling for all markdown elements
- 🔧 Easy to integrate and use

## Installation

The required packages are already installed:

- `react-markdown` - Core markdown rendering
- `remark-gfm` - GitHub Flavored Markdown support

## Usage

### Basic Usage

```jsx
import MarkdownRenderer from "./components/MarkdownRenderer";

function MyComponent() {
  const content = `# Hello World
  
This is **bold** and this is *italic*.`;

  return <MarkdownRenderer content={content} />;
}
```

### With Custom CSS Classes

```jsx
<MarkdownRenderer content={markdownContent} className="my-custom-class" />
```

### Dynamic Content Example

```jsx
import React, { useState } from "react";
import MarkdownRenderer from "./components/MarkdownRenderer";

function DynamicMarkdown() {
  const [content, setContent] = useState("# Initial Content");

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <MarkdownRenderer content={content} />
    </div>
  );
}
```

## Supported Markdown Elements

- **Headings** (h1, h2, h3) - Bold, sized appropriately
- **Paragraphs** - Proper spacing and line height
- **Lists** (ordered & unordered) - Styled bullets/numbers
- **Code blocks** - Inline and block code with syntax highlighting
- **Blockquotes** - Left border with italic text
- **Links** - Blue, underlined on hover
- **Bold/Italic** - Proper font weights
- **Horizontal rules** - Styled dividers

## Styling Customization

The component uses Tailwind CSS classes. To customize:

1. Edit the component classes in `MarkdownRenderer.jsx`
2. Add custom CSS to your global styles
3. Use the `className` prop for container-level styling

## Example Implementation

See `Implementation.jsx` for a complete example of rendering an implementation plan with formatted markdown content.

## Props

| Prop        | Type     | Default  | Description                              |
| ----------- | -------- | -------- | ---------------------------------------- |
| `content`   | `string` | required | The markdown content to render           |
| `className` | `string` | `""`     | Additional CSS classes for the container |

## Dark Mode

The component automatically supports dark mode through Tailwind's `dark:` variant classes. Ensure your app has dark mode configured in Tailwind.

## Notes

- The component uses `remark-gfm` plugin for GitHub Flavored Markdown features like tables, strikethrough, task lists, etc.
- All markdown elements are styled consistently with your app's design system
- The component is fully responsive and works on all screen sizes
