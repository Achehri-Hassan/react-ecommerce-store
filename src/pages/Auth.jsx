

import { useState } from "react";
// import "../assets/css/Form.css";
import { useForm } from "react-hook-form";

export default function Auth(){
    
    const [mode , setModel] = useState("signup");
    const {register , handleSubmit ,formState:{errors},} = useForm();

    function onSubmit(){
        alert("Signed Up");
    }
    
    return(
         
        <div className="page">
           <div className="container">
            <div className="auth-container">
              <h1 className="page-title">{mode === "signup" ? "Sign Up" : "login" }</h1>
              <form action="" className="auth-form" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                     <label className="form-label" htmlFor="email">Email</label>
                     <input type="email"  className="form-input" id="email" {...register('email',{required:"Email is required"})}/>
                    {errors.email && (

                        <span className="form-error">{errors.email.message}</span>
                    )}
                    
                </div>
                  
                 

                 <div className="form-group">
                     <label className="form-label" htmlFor="password">Password</label>
                     <input type="password"  className="form-input"  id="password" 
                     {...register('Password',{required:"Password is required" ,
                        minLength:{
                            value:12,
                            message:"Please must be at least 6 character",
                        },
                        maxLength:{
                             value:12,
                             message:"Please must be less than 12characters",
                        },
                     })}/>

                      {errors.password && (

                        <span className="form-error">{errors.password.message}</span>
                    )}

                </div>
                <button type="submit" className="btn btn-primary btn-large">
                    {mode === "signup" ? "Sign Up" : "login" }
                </button>
              </form>

               <div className="auth-switch">

                 { mode === "signup" ?

                    <p>Already have an  account?  {" "}
                    <span className="auth-link" onClick={() => setModel("login")}>Login</span>
                    </p>

                 : (
                     <p> {" "}
                    Don't  have an  account?  {" "}
                    <span className="auth-link" onClick={() => setModel("signup")}>Sign up</span>
                    </p>
                 )}

                    {/* {" "}Don't  have an  account?  {" "}<span className="auth-link">Sign up</span></p> } */}

               </div>
            </div>
           </div>
        </div>
    )
}