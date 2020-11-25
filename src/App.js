// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form'
import Show from './Components/Show'
import React, {useState} from 'react'

function App() {
  const[ user, setUser] = useState({})
  return (
    <div className="container mt-5">
      
        <h2>React Forms</h2>
      
      <div className="row">
        <div className="col">
          <Form setUser = {setUser}/>
        </div>
        <div className="col">
          <Show user = {user} />
        </div>
      </div>
    </div>
  );
}

export default App;
