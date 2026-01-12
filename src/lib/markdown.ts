// Simple markdown to HTML converter
// Handles basic markdown syntax for blog posts

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Code blocks (must be first to avoid conflicts)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang || "text";
    const escapedCode = escapeHtml(code.trim());
    return `<pre class="code-block" data-language="${language}"><code>${escapedCode}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="prose-h3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="prose-h2">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="prose-h1">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="prose-link">$1</a>'
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="prose-hr" />');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="prose-blockquote">$1</blockquote>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li class="prose-li">$1</li>');
  html = html.replace(/(<li class="prose-li">.*<\/li>\n?)+/g, (match) => {
    return `<ul class="prose-ul">${match}</ul>`;
  });

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="prose-li-ordered">$1</li>');
  html = html.replace(/(<li class="prose-li-ordered">.*<\/li>\n?)+/g, (match) => {
    return `<ol class="prose-ol">${match}</ol>`;
  });

  // Paragraphs (wrap remaining text)
  html = html
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      // Skip if already wrapped in a block element
      if (
        block.startsWith("<h") ||
        block.startsWith("<ul") ||
        block.startsWith("<ol") ||
        block.startsWith("<pre") ||
        block.startsWith("<blockquote") ||
        block.startsWith("<hr")
      ) {
        return block;
      }
      // Wrap in paragraph
      return `<p class="prose-p">${block.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
