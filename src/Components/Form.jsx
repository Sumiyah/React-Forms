import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = (props) => {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Cpassword, setCPassword] = useState("")
  //for password: 
  const [errors, setErrors] = useState({});

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

  // PASSWORD VALIDATIONS
  const fnameErrors = e => {
    let value = e.target.value;
    let message = "";
    if (!value) {
      message = "First name can't be empty .. please tell us your name"
    } else if (value.length < 2) {
      message = "First name must be at least 2 characters"
    }
    setErrors({ ...errors, fname: message });
  }

  const lnameErrors = e => {
    let value = e.target.value;
    let message = "";
    if (!value) {
      message = "Last name can't be empty .. Why so secretive?"
    } else if (value.length < 2) {
      message = "Last name must contain 2 characters at least!"
    }
    setErrors({ ...errors, lname: message });
  }

  const emailErrors = e => {
    let value = e.target.value;
    let message = "";
    if (value.length < 5) {
      message = "Email must be at least 5 characters :)!"
    }
    setErrors({ ...errors, email: message });
  }

  const passwordErrors = e => {
    let value = e.target.value;
    let message = "";
    if (value.length < 8) {
      message = "For your safety, keep the password more than 8 characters"
    }
    setErrors({ ...errors, password: message });
  }

  const CpasswordErrors = e => {
    let value = e.target.value;
    let message = "";
    if (value !== password) {
      message = "Passwords do not match unfortunantly, Try Again :)"
    }
    setErrors({ ...errors, Cpassword: message });
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
            <input type="text" className="form-control" onChange={e => setFname(e.target.value)} value={fname} onBlur={fnameErrors} />
            <p className="text-danger">{errors.fname}</p>
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" className="form-control" onChange={e => setLname(e.target.value)} value={lname} onBlur={lnameErrors} />
            <p className="text-danger">{errors.lname}</p>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} onBlur={emailErrors} />
            <p className="text-danger">{errors.email}</p>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} onBlur={passwordErrors} />
            <p className="text-danger">{errors.password}</p>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" onChange={e => setCPassword(e.target.value)} value={Cpassword} onBlur={CpasswordErrors} />
            <p className="text-danger">{errors.Cpassword}</p>
          </div>

          {
            fname.length >= 2 && lname.length >= 2 && email.length >= 5 && password >= 8 && Cpassword === password ?
            <input type="submit" value="Submit Information" className="btn btn-info btn-center" /> :
            <input type="submit" value="Submit Information" className="btn btn-info btn-center" disabled/>
          }
        </form>
      </div>
    </div>
  )
}

export default Form;