import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";
// ----------------------------------------------------------------

const Login = () => {
  // -----------------------STATES-----------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // -------------------FUNCTIONS------------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate Email
    if (!validateEmail(email)) {
      setError("Please enter valid email.");
      return;
    }
    if (!password) {
      setError("Please enter password.");
      return;
    }
    setError("");

    // Login API call
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7 ">Login</h4>
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-xs text-red-500 pb-1">{error}</p>}

            <button className="btn-primary">Login</button>
            <p className="font-sm mt-2">
              Not registered yet ?{" "}
              <Link to="/signup" className="font-small text-blue-400 underline">
                Create account
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
