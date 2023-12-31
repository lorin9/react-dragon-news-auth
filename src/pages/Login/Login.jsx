import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser} = useContext(AuthContext)
 const location = useLocation()
 const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
       const form = new FormData(e.currentTarget)
      const password = form.get('password')
      const email = form.get('email')

       loginUser( email, password)
       .then(result =>{
        console.log(result.user)

        // navigate after login

        navigate(location?.state? location.state : '/')
        
       })
       .catch(error =>{
        console.log(error)
       })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mb-4"> Please Login</h2>
            <div className=" mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <p className="text-center  pb-6">Do not have an account? please <Link className="text-blue-600 font-bold" to='/register'>register</Link></p>
    </div>
        </div>
    );
};

export default Login;