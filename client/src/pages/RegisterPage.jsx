import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser=(e)=>{
    e.preventDefault()
    axios.post("/register",{
      name,
      email,
      password
    })
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl mb-4 text-center">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="username"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourname@email.com"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button className="primary mt-2">Register</button>
          <div className="text-center py-2 text-gray-500  ">
            Already have an account?{" "}
            <Link to={"/login"} className="underline hover:text-blue-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
