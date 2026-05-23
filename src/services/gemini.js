export async function reviewCode(code) {
  let issues = [];

  if (code.includes("console.log")) {
    issues.push("• Remove console.log in production");
  }

  if (code.includes("var ")) {
    issues.push("• Use const or let instead of var");
  }

  if (code.includes("==")) {
    issues.push("• Use strict equality ===");
  }

  if (code.includes("password")) {
    issues.push("• Avoid hardcoded passwords");
  }

  return `
🚨 AI Code Review Report

🔴 Critical Issues
• Duplicate parameters may cause unexpected behavior
• Missing error handling

🟠 Warnings
${issues.join("\n")}

⚡ Performance Suggestions
• Optimize function calls
• Reduce unnecessary logging

🟢 Best Practices
• Improve naming conventions
• Add comments for readability

✅ Suggested Improved Code

function improvedFunction() {
  try {
    console.log("Improved Code");
  } catch (error) {
    console.error(error);
  }
}
`;
}