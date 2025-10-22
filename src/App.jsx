// src/App.jsx
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-2">🧠 AI Routine Generator</h1>
        <p className="text-sm text-gray-600 mb-6">
          By Mostafa — build your perfect day in 30s
        </p>

        <label className="block text-sm font-medium text-gray-700">
          Your name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
          className="w-full mt-2 p-3 border rounded mb-4"
        />

        <div className="p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-800">
            Hello {name ? name : "friend"} — this will become your AI routine
            generator.
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Next: we will build the form to ask wake time, goals, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
