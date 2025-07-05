"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/hello`
      : "http://localhost:3000/api/hello";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
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