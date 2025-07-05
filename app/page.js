"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch("/api/hello");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        console.error("API request failed:", err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to My Full Stack App</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>
          <p style={{ color: "red" }}>Error: {error}</p>
          <p>Try visiting the API directly:{" "}
            <a href="/api/hello" target="_blank">
              /api/hello
            </a>
          </p>
        </div>
      ) : (
        <p>Message from API: {message}</p>
      )}
    </div>
  );
}