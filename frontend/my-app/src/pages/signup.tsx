import React from "react"
import { useState } from "react";

export function Signup() {

    const [newname, setNewName] = useState("")
    const [newemail, setNewemail] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [newcpassword, setNewcpassword] = useState("");


    const handleCreate = async () => {
        try {
       
          const response = await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
           
            body: JSON.stringify({
              name: newname,
              email: newemail,
              password:newpassword
            }
  
            ),
            
           
            
          }
        
          );
         
        } catch (error) {
          console.error("Error creating owner:", error);
        }
        setNewName("");
        setNewemail("");
        setNewpassword("");
        setNewcpassword("");
      };


    return(

    
        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name"
                                value={newname} onChange={(e) => setNewName(e.target.value)} />
        
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                value={newemail} onChange={(e) => setNewemail(e.target.value)} />
        
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                value={newpassword} onChange={(e) => setNewpassword(e.target.value)} />
                                 <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Confirm Password"
                                value={newcpassword} onChange={(e) => setNewcpassword(e.target.value)} />
                       
        
                            <button
                            onClick={handleCreate}
                                
                                className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >Create Account</button>
        
                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
        
                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <a className="no-underline border-b border-blue text-blue" href="http://localhost:3000/">
                                Log in
                            </a>.
                        </div>
                    </div>
                </div>


    )
}
export default Signup;