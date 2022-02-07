import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router';
// import { Route, useParams } from "react-router-dom";

// import axios from 'axios';
import { useParams } from 'react-router-dom'
function Forgot(){
     const [password,setPassword]=useState("");
     const [cpassword,setCpassword]=useState("");
     const [data , setData] = useState([])
     const [id , setId] = useState(null)
     const params = useParams()
     let navigate = useNavigate(); 
     let { ids } = useParams();
          function NPassHandle(e){
               e.preventDefault();
               var data = 
               {
                     Password: password,
               };
               console.log("payload", data)
               if(password === cpassword){
                    alert("Password Successfully changed")
                    e.preventDefault();
                    navigate('/Login')
                    const payload = {
                         method: 'PATCH',
                         headers: 
                         { 
                              'Content-Type': 'application/json' 
                         },
                         body: JSON.stringify(data)
                    };
                    
                    // console.log(id)
                     fetch(`http://localhost:3000/Register/${params.id}`, payload)
                         .then(response => response.json())
                         .then(result => setData(result));
               }
               else{
                    alert("Password does not match")
               }
          }
     return(
          
          <div className="Forgotpass">
               <h2 style={{color:"white"}}>Reset Password</h2>
              <div className="container cards bg-success"><br/>
                   <form onSubmit={NPassHandle}>
                        <div className="mb-6">
                             <input type="password" id="first" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter Your new password"/>
                                  <div className="form-text"></div>
                        </div><br/>
                        <div className="mb-6">
                             <input type="password" id="second" value={cpassword} onChange={e => setCpassword(e.target.value)} className="form-control" placeholder="Confirm Your new password"/>
                                  <div className="form-text"></div>
                        </div><br/>
                        <button type="submit" className="btn btn-outline-light">Submit</button>
                   </form><br/><br/>
              </div>
         </div>
)
 }
export default Forgot;