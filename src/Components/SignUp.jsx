import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Header from "../Header";


const SignUp = () => {
    const {signUpWithPass} = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        signUpWithPass(email,password)
        .then(result =>{
           console.log(result.user)
           const createdAt = result?.user?.metadata?.creationTime;
           const newUser = {name,email,createdAt}

        //  save newUser to the database
           fetch('http://localhost:3000/users',{
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(newUser)
           })
           .then(res => res.json())
           .then(data => {
        

            if(data.insertedId){
             alert('user created in mongodb database')
            }
           })


        })
        .catch(error => {
            console.log('error ashce:', error)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
          
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUP now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" name="name" required />
        </div>
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
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;