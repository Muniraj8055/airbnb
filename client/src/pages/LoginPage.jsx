import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl mb-4 text-center">Login</h1>
        <form className="max-w-md mx-auto" action="">
          <input type="email" placeholder="yourname@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary mt-2">Login</button>
          <div className="text-center py-2 text-gray-500  ">
            Don't have an account yet? <Link to={"/register"} className="underline hover:text-blue-900">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
