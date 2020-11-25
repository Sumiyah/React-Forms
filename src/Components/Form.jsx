import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = (props) => {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Cpassword, setCPassword] = useState("")

  const addUser = e => {
    e.preventDefault();
    const user = { fname, lname, email, password, Cpassword }
    props.setUser(user);
    setFname("")
    setLname("")
    setEmail("")
    setPassword("")
    setCPassword("")
    // I had them like setCPassword= ('') and that caused an error
  }

  return (
    <div className="card">
      <div className="card-header bg-dark text-light">
        <h4>Enter your Information</h4>
      </div>
      <div className="card-body">

        <form onSubmit={addUser}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" className="form-control" onChange={e => setFname(e.target.value)} value={fname} />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" className="form-control" onChange={e => setLname(e.target.value)} value={lname} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" onChange={e => setCPassword(e.target.value)} value={Cpassword} />
          </div>
          <input type="submit" value="Submit Information" className="btn btn-info btn-center" />
        </form>
      </div>
    </div>
  )
}

export default Form;