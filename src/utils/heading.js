export function extractH2Headings(mdContent) {
  if (typeof mdContent !== "string") {
    return [];
  }

  const heading2Regex = /^##\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = heading2Regex.exec(mdContent)) !== null) {
    // match[1] contains the heading text without the ##
    headings.push(match[1].trim());
  }

  return headings;
}
