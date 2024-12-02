import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)

        // signin
        signInUser(email,password)
        .then(result => {
            console.log(result.user)
            alert('login successfully')
            navigate('/')

            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}

            fetch(`http://localhost:3000/users/${email}`,{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application.json',
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('signInfo update in db' , data)
            })
        })
        .catch(error => {
            console.log('error ashce:', error)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen p-4">
          
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 px-5">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <p>Do not have any account? Please <NavLink to="/signUp" className="font-bold underline">SignUp</NavLink></p>
          </div>
        </div>
      </div>
    );
};

export default SignIn;
