import './App.css';
import Login from './frontend/Login';
import Signup from './frontend/Signup';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './frontend/Home';
import Fp from './frontend/Fp';
import Forgot from './frontend/Forgot';
import List from './List'
import Form from './frontend/Form';
import View from './View';

function App() {

  const obj={
    "name":"test",
    "email":"test@gmail.com",
    "password":"123456"
  }
  
  return (
    <BrowserRouter>
           <div className="App">
             {/* <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <button className="btn btn-outline-light">Signup</button>
  </div>
</nav>
<img src="https://media-exp1.licdn.com/dms/image/C510BAQGx5lw2EEsXnQ/company-logo_200_200/0/1579843438251?e=2159024400&v=beta&t=ci0G8s8J9vx_s6dknJJNNPO0_46v5MV6_vPaYdWh7dE" height="500px" width="100%"/> */}
            <nav>
                <Link to="/"></Link>

                <Link to="/Login"></Link>
              
                <Link to="/Signup"></Link>
              
                <Link to="/Fp"></Link>

                <Link to="/List"></Link>

                <Link to="/Form"></Link>

                <Link to="/Form/:id"></Link>

                <Link to="/Forgot"></Link>

                <Link to="/View/:id"></Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route> 

                 <Route exact path='/Signup' element={< Signup />}></Route>

                

                 <Route exact path='/Fp' element={< Fp />}></Route>

                 <Route exact path='/Form' element={< Form />}></Route>

                 <Route exact path='/Form/:id' element={< Form />}></Route>
                 
                 <Route exact path='/Forgot/:id' element={< Forgot />}></Route>

                 <Route exact path='/List' element={< List />}></Route>

                 <Route exact path='/View/:id' element={< View />}></Route>
          </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
