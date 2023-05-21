import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Login = () => {
  const navigate = useNavigate()
  
  const { signIn, handleGoogleSignIn } = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      form.reset();
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl hover:shadow-zinc-600 bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl text-center text-purple-400 font-bold">Login!!!</h1>
              <form onSubmit={handleLogin}>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div> <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <h5 className="my-4 text-center">You Have New To? <Link className="text-purple-500 font-bold" to="/signup">SignUp</Link></h5>
             <button className="btn btn-outline btn-secondary" onClick={handleGoogleSignIn}>Google SignIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;