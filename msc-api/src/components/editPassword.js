import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import logo from '../logo.svg'
import { getPasswordInitiate, updatePassword, validatePassword } from '../actions'

const newPasMan = (props) => {
  if (props.Passwords === "") {
    props.getInitiate()
    return (
      <h1 className="title is-1">Please Wait</h1>
    )
  }
  let passwordToEdit = props.Passwords.find( x => {
    return x.id === props.match.params.id
  })
    return (
      <div>
        <h1 className="title is-1">Edit Password</h1>
        <br />
        <div className="box" style={{backgroundColor: "#83c669"}}>
          <div className="box" style={{width: "50%", margin: "auto"}}>
            <form>
              <div className="field">
                <label className="label">
                  URL
                </label>
                <input className="input" type="text" placeholder="URL site" id="newURL" defaultValue={passwordToEdit.url}/>
              </div>
              <div className="field">
                <label className="label">
                  Username
                </label>
                <input className="input" type="text" placeholder="Username" id="newUsername" defaultValue={passwordToEdit.username}/>
              </div>
              <div className="field">
                <label className="label">
                  Password
                </label>
                <input className={props.validatePasswordState.class} type="text" placeholder="Password" onChange={(e) => props.validatePassword(e.target.value)} id="newPassword"
                defaultValue={passwordToEdit.password}/>
                { props.validatePasswordState.msg === "This password is good" ?
                <p className="help is-success">{props.validatePasswordState.msg} <span className="icon is-small"><i className="fa fa-thumbs-up"></i></span></p> :
                <p className="help is-danger">{props.validatePasswordState.msg}</p> }
              </div>
              <div className="field" style={{textAlign: "left"}}>
                {
                  props.validatePasswordState.msg === "This password is good" ?
                  <Link to="/password-manager"><p className="button is-success" onClick={() => {
                    props.updatePassKuy({
                      id: passwordToEdit.id,
                      url: document.getElementById("newURL").value,
                      username: document.getElementById("newUsername").value,
                      password: document.getElementById("newPassword").value,
                      createdAt: passwordToEdit.createdAt
                    })
                  }}>Update</p></Link> :
                  <p className="button is-success" disabled>Update</p>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

let mapStateToProps = (state) => {
  return {
    Passwords: state.passwordState.passwordList,
    validatePasswordState: state.passwordState.validatePassword
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getInitiate: () => dispatch(getPasswordInitiate()),
    updatePassKuy: (obj) => {
      dispatch(updatePassword(obj))
    },
    validatePassword: (val) => {
      dispatch(validatePassword(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newPasMan)
