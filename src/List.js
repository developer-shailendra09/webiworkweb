import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
// import Form from './frontend/Form';
import "./list.css";

function List() {
  var navigate = useNavigate();
  const [data, setData] = useState([]);
  // let { id } = useParams();
  function navigateHome() {
    navigate("/Home");
  }
  // const state = {
  //     Alldata : rowData,
  //     id: '',
  //     name : '',
  //     number : '',
  //     email : '',
  //     salary :'',
  //     updateEdit:[]
  // }
  // onEdit = (id) => {
  //     const items = Alldata;
  //     const data = items.indexOf(ssss(id))
  //     const SelectedRecord = items[index];
  //     function setState({
  //         id:SelectedRecord[id],
  //         name:selectedRecord[name],
  //         number:selectedRecord[number],
  //         email:selectedRecord[email],
  //         salary:selectedRecord[salary],
  //     })
  // }
  // function ssss = (id) = >{
  //     const product = Alldata.find(item =>
  //         item.id === id);
  //         return product;
  // }
  useEffect(() => {
    getUsers();
  }, []);
  console.log(data);
  function navigatePage() {
    navigate("/Form");
  }
  function getUsers() {
    fetch("http://localhost:3000/Employee")
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  function deleteUser(id) {
    fetch(`http://localhost:3000/Employee/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then(() => {
        console.log(result);
        getUsers();
      });
    });
  }
  function navigatePath() {
    navigate("/View");
  }
  // function navigatePage(){
  //   console.log("data", data)
  // }
  // useEffect(() => {
  //     fetch('http://localhost:3000/Employee')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  //       },[])

  // useEffect(() => {

  //     getUsers()
  //  },[])
  //    console.log(data)
  //  function getUsers(){
  //  fetch(`http://localhost:3000/Employee/${id}`)
  //  .then(response => response.json())
  //  .then(data => setData(data));
  //}
  // function updateUser()
  // {
  //   let data = {name,mobile,email}
  //   fetch(`http://localhost:3000/Employee/${userId}`, {
  //     method: 'PUT',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }

  return (
    <>
      <h1>Employee List</h1>
      <button className="btn btn-outline-primary" onClick={navigatePage}>
        Add Employee
      </button>
      <div className="container">
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Salary</th>
              <th>action</th>
            </tr>
            {data.map((dt,i) => (
              <tr key={i}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.email}</td>
                <td>{dt.mobile}</td>
                <td>{dt.salary}</td>
                <td>
                <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/View/" + dt.id)}>View</button>
                  {/* <a href={`/View/${dt.id}`}>View</a>*/}
                  &nbsp;&nbsp; 
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/Form/" + dt.id)}>Edit</button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => deleteUser(dt.id)}
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;
                </td>
              </tr>
            ))}
          </thead>
        </table>
        <br />
        <button className="btn btn-dark left" onClick={navigateHome}>
          Back
        </button>
      </div>
    </>
  );
}

export default List;




























