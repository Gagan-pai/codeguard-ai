export async function reviewCode(code) {
  return `
🚨 AI Code Review Report

🔴 Critical Issues
• Duplicate parameters may cause unexpected behavior
• Missing error handling

🟠 Warnings
• Undefined variables possible
• Console logs should be removed in production

⚡ Performance Suggestions
• Use const instead of var
• Avoid unnecessary function calls

🟢 Best Practices
• Improve variable naming
• Add comments for readability

✅ Suggested Improved Code

function hello() {
  try {
    console.log("Hello World");
  } catch (error) {
    console.error(error);
  }
}
`;
}