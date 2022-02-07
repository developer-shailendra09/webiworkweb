import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router';
import './login.css';

function Login()
{
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [data , setData] = useState([])
    let navigate = useNavigate();  
   
   function loginHandle(e)
        {
             e.preventDefault();
             var payload = 
             {
             Email: user,
             Password: password,
             };

             console.log("payload" , payload);
             var users = data.find((res)=>
             {
               console.log("rrrrrrrrrrrr",res);
               return  res.Email === payload.Email && res.Password===payload.Password
             })
             if(users){
             navigate('/Home');
             e.preventDefault();
             const payload =
            {
             Email: user,
             Password: password,
            };
            console.log("payload" , payload);
            fetch('http://localhost:3000/Login', 
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


        useEffect(() => {
        fetch('http://localhost:3000/Register')
        .then(response => response.json())
        .then(data => setData(data));
          },[])


    function userHandler(e){
        let item=e.target.value;
        if(user.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }

    function passwordHandler(e){
        let item=e.target.value;
        if(password.length<7 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    function routePage(){
      navigate('/Signup')
    }
    return (
        <>
            <h1>My Login</h1>
                <div className="container cards bg-info">
                <form onSubmit={loginHandle}>
                        <div className="mb-6">
                        <br/>
                                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" required onChange={userHandler}/>
                                {userErr?<span className="text-denger">User Not Valid</span>:""}
                                    <div id="emailHelp" className="form-text"></div>
                        </div><br/>
                        <div className="mb-6">
                        <input type="password" className="form-control" placeholder="Password" required onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}
                            
                        </div><br/>
                    
                        <br/>
                        <div>
                        <button type="submit" className="btn btn-outline-danger">
                        <a href="/Home"></a>Submit</button>&nbsp; &nbsp;  &nbsp;
                        <a href="http://localhost:3001/Fp" id="link">Forgot Password ?</a>
                    </div>
                    <br/><br/>
                    <span>New to My Login? &nbsp;
                            <a onClick={routePage}>Create Account</a>
                            </span>
                </form><br/><br/>
        </div>
</>

    );
  }
  
  export default Login;





   // e.preventDefault()
        // console.log("payload" , payload);

        // const data = axios.post("http://localhost:5000/login" , payload)
        // console.log("data" , data)  


        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({payload})
        // };
        // fetch('http://localhost:5000/login', requestOptions)
        //     .then(response =>console.log("response" , response))
        //     // .then(data => setAlldata({ postId: data.id }));

        // console.log("data" , data);



          {/* <div class="mb-12 ">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                             <label class="form-check-label fs-9" for="exampleCheck1" > &nbsp;&nbsp;
                              I agree to My Login's &nbsp;
                                  <a href="https://www.zomato.com/policies/terms-of-service/" class="red" target="_blank">Terms of Service,</a> &nbsp;
                                  <a href="https://www.zomato.com/policies/privacy/" class="red" target="_blank">Privacy Policy,</a>&nbsp;
                                  and &nbsp;
                                  <a href="https://www.zomato.com/policies/" class="red" target="_blank">Content Policies.</a>
                              </label>
                    </div> */} 
                    
        // if(user.length<7 || password.length<6)
        // {
        //     alert("Please Enter Valid Input")
        // }
        // else
        // {
        //     alert("Successfully Login")
        // }