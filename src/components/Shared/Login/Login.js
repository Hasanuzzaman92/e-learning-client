import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from 'react-hot-toast'
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

  const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('email not verified. Please verify your email.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



  return (
    <div className="w-[80%] flex justify-center my-10 sm:ml-10">
      <div className="w-full max-w-xl xl:px-8">
        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
          <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Login Now
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                E-mail
              </label>
              <input
                placeholder="email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="password"
                className="inline-block mb-1 font-medium"
              >
                Password
              </label>
              <input
                placeholder="Password"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="password"
                name="lpassword"
              />
            </div>
            <p className="text-red-600 my-4">{error}</p>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-rose-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Login
              </button>
            </div>

            <p className="text-xs text-red-600 sm:text-sm">
              Haven't any account?{" "}
              <span className="underline">
                <Link to="/register">Register Now</Link>
              </span>
            </p>
          </form>

          <div className="btn-group btn-group-vertical w-full my-10">
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error">
              Login with google
            </button>
            <button className="btn btn-outline btn-error">
              Login with github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
