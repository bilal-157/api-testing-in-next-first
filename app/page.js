// In your page.js - use this version
"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simple relative URL - works everywhere
    fetch("/api/hello")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to My Full Stack App</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Message from API: {message || "Loading..."}</p>
      )}
    </div>
  );
}