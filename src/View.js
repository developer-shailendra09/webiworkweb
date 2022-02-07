import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
function View(){
  const[data, setData]=useState('');
  const params = useParams()
  let {ids} = useParams();
  var navigate = useNavigate();

  function navigatePath(){
    navigate('/List')
  }
  
  function getUsers(){
    fetch(`http://localhost:3000/Employee/${params.id}`)
    .then(response => response.json())
    .then(data => setData(data));
  }

  useEffect(()=>{
    getUsers()
  },[])
     return(
        <>
        <div className="card ">
           <h1>Employee details</h1>
           <center><img src="https://www.pageuppeople.com/wp-content/uploads/2019/01/Top-60-Employee-Engagement-image14-1024x511.png" height="200px" width="450px" alt="pic"/></center>
            <div className="card-header">
            <h4>Employee Id :  {data.id}</h4></div>
            <div className="card-body">   
            <h4>Name &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{data.name} </h4>
            <h4>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.email} </h4>
            <h4>Mobile No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.mobile} </h4>
            <h4>Salary &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.salary}</h4>
           </div>
</div>
<button className="btn btn-dark" onClick={navigatePath}>Back</button>
        </>
    )
}

export default View;


  