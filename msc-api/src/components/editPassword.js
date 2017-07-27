import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import logo from '../logo.svg'
import { postPassword, validatePassword } from '../actions'

const newPasMan = (props) => {
    return (
      <div>
        <h1 className="title is-1">New Password</h1>
        <br />
        <div className="box" style={{backgroundColor: "#83c669"}}>
          <div className="box" style={{width: "50%", margin: "auto"}}>
            <form>
              <div className="field">
                <label className="label">
                  URL
                </label>
                <input className="input" type="text" placeholder="URL site" id="newURL"/>
              </div>
              <div className="field">
                <label className="label">
                  Username
                </label>
                <input className="input" type="text" placeholder="Username" id="newUsername"/>
              </div>
              <div className="field">
                <label className="label">
                  Password
                </label>
                <input className="input" type="text" placeholder="Password" onChange={(e) => props.validatePassword(e.target.value)} id="newPassword"/>
              </div>
              <div className="field" style={{textAlign: "left"}}>
                <Link to="/password-manager"><p className="button is-success" onClick={() => props.newPassKuy({
                  url: document.getElementById("newURL").value,
                  username: document.getElementById("newUsername").value,
                  password: document.getElementById("newPassword").value
                })}>Submit</p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

let mapStateToProps = (state) => {
  return {
    editPasswords: state.getPassword
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newPassKuy: (obj) => {
      dispatch(postPassword(obj))
    },
    validatePassword: (val) => {
      dispatch(validatePassword(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newPasMan)
