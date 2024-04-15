import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import PasswordInput from "../../components/Input/PasswordInput"


const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form  onSubmit={()=>{}}>
          <h4  className="text-2xl mb-7">Login</h4>
          <input type="email" placeholder="Email" className="input-box" />
          <PasswordInput />
          <button className="btn-primary">Login</button>
          <p className="font-sm mt-2">Not registered yet ? {" "} <Link to="/signup" className="font-small text-blue-400 underline" >Create and account</Link> </p>

        </form>
      </div>
    </div>
    </>
  )
}

export default Login