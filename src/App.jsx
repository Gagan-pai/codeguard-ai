import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { reviewCode } from "./services/gemini";

export default function App() {
  const [code, setCode] = useState(`function login(user, password, password) {
  console.log(username)

  if(password == "admin123"){
    return true
  }

  var data = fetch("/api/users")

  return
}`);

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);

    const response = await reviewCode(code);

    setReview(response);

    setLoading(false);
  };

  const copyReview = () => {
    navigator.clipboard.writeText(review);
    alert("Review copied!");
  };

  return (
    <div
      style={{
        background: "#0d1117",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        🚀 CodeGuard AI
      </h1>

      <p
        style={{
          color: "#8b949e",
          marginBottom: "20px",
        }}
      >
        AI-powered smart code review assistant for developers
      </p>

      <button
        onClick={handleReview}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          marginRight: "10px",
        }}
      >
        Review Code
      </button>

      <button
        onClick={copyReview}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          background: "#30363d",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Copy Review
      </button>

      <CodeEditor code={code} setCode={setCode} />

      <div
        style={{
          marginTop: "20px",
          background: "#161b22",
          padding: "20px",
          borderRadius: "10px",
          whiteSpace: "pre-wrap",
          border: "1px solid #30363d",
          lineHeight: "1.8",
        }}
      >
        {loading ? "🤖 AI reviewing code..." : review}
      </div>
    </div>
  );
}