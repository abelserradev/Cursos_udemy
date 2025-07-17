'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/");
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Error al iniciar sesión");
    }};

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesion</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-ms mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-blue-600"
          >iniciar sesion
          </button>
        </form>
      </div>
    );
  
};

export default Login;
