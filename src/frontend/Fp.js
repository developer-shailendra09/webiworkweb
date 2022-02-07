import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router';

function Fp()
{
               const [email,setEmail]=useState("");
               const [data , setData] = useState([])
               let navigate = useNavigate();  

          function forgotPassHandle(e)
          {
                    e.preventDefault();
                    var payload = {
                    Email: email,
                    };
      
               console.log("payload", payload );
               var users = data.find((res)=>
               {
                  console.log("rrrrrrrrrrrr",res);
                  return  res.Email === payload.Email 
               })
               if(users)
               {
                    const id = users.id;
                    console.log("response",id)
                   // navigate(`/Forgot/${id}`)
                    navigate(`/Forgot/${id}`)
                    e.preventDefault();
                    const payload = {
                    Email: email,
                    };
                    console.log("payload" , payload);
                    fetch('http://localhost:3000/Forgotpe', 
                    {
                        method: 'POST', // or 'PUT'
                        headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
               })
          }
               else
                    {
                       alert("No user found. Please Enter Valid credential")
                    }
          }    
               useEffect(() => 
               {
                fetch('http://localhost:3000/Register')
                .then(response => response.json())
                .then(data => setData(data));
               },[])
               
     return (
          <>
          <h2 style={{color:"black"}}>Reset Password</h2>
          <div className="container cards bg-success">
               <br/>
          <form onSubmit={forgotPassHandle}>
                  <div className="mb-6">
                          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter Your Email" required />
                              <div id="emailHelp" className="form-text"></div>
                  </div>
                               
                  <br/>
                  <div>
                  <button type="email" className="btn btn-outline-danger">Reset password</button>
              </div>
              
             
          </form><br/><br/>
  </div>
  </>
    
   );
}

export default Fp;
