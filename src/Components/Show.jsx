import React from 'react'

const Show = props => {
    return (
        <div className="card">
            <div className="card-header bg-dark text-light">
                <h4>Your Information</h4>
            </div>
            <div className="card-body">
                <h5>Name: {props.user.fname} {props.user.lname}</h5>
                <h5>Email: {props.user.email} </h5>
                <h6>Password: {props.user.password} </h6>
                <h6>Password Confirmation: {props.user.Cpassword} </h6>
            </div>
        </div>
    )
}

export default Show;