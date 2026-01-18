import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setStatus(data))
      .catch(() => setStatus("Backend not reachable ❌"));
  }, []);

  return (
    <div className="container">
      <h1>🚀 Dockerized Full-Stack App</h1>

      <p className="subtitle">React + Node.js + MongoDB running with Docker</p>

      <div className="card">
        <h2>Backend Status</h2>
        <p>{status}</p>
      </div>

      <footer>
        <p>Built & containerized using Docker 🐳</p>
      </footer>
    </div>
  );
}

export default App;
