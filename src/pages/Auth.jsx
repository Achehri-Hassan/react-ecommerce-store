

import { useState } from "react";
// import {useForm} from "react-hook-form";
import "../assets/css/Auth.css";

export default function Auth(){
    
    const [mode , setModel] = useState("signup");
    
    return(
         
        <div className="page">
           <div className="container">
            <div className="auth-container">
              <h1 className="page-title">{mode === "signup" ? "Sign Up" : "login" }</h1>
              <form action="" className="auth-form">

                <div className="form-group">
                     <label className="form-label" htmlFor="email">Email</label>
                     <input type="email"  className="form-input" id="email"/>
                </div>

                 <div className="form-group">
                     <label className="form-label" htmlFor="password">Password</label>
                     <input type="password"  className="form-input"  id="password"/>
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