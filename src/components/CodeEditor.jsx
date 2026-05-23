export default function CodeEditor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      style={{
        width: "100%",
        height: "500px",
        background: "#161b22",
        color: "white",
        padding: "10px",
        fontSize: "16px",
        border: "none",
        outline: "none",
      }}
    />
  );
}
