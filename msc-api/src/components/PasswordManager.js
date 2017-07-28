import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

// import logo from '../logo.svg'
import { getPasswordInitiate, deletePasswordGo, searchPassword } from '../actions'

const PasMan = (props) => {
  if (props.Passwords === "") {
    props.getInitiate()
    return (
      <h1 className="title is-1">Password Manager</h1>
    )
  } else {
    return (
      <div>
        <h1 className="title is-1">Password Manager</h1>
        <br />
        <div style={{textAlign: "left"}}>
          <div className="columns" style={{paddingLeft: "10px", paddingRight: "10px"}}>
            <div className="column">
              <Link to="/new-password"><p className="button is-success">New Password</p></Link>
            </div>
            <div className="column" style={{textAlign: "right"}}>
              <input className="input" type="text" placeholder="Search..." onChange={(e) => props.searchPassword(e.target.value)} />
            </div>
          </div>
          <table className="table" style={{marginTop: "10px"}}>
            <thead>
              <tr>
                <th style={{textAlign: "center"}}>No.</th>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created</th>
                <th>Updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.Passwords.map( (x, idx) => {
                return (
                  <tr key={idx}>
                    <td style={{textAlign: "center"}}>{idx+1}</td>
                    <td><a href={x.url} target="_blank">{x.url}</a></td>
                    <td>{x.username}</td>
                    <td>{x.password}</td>
                    <td>{x.createdAt}</td>
                    <td>{x.updatedAt}</td>
                    <td>
                      <div className="button is-info" style={{transform: "scale(0.7)"}} onClick={() => props.editPassword(x.id)}>
                        <span className="icon"><i className="fa fa-pencil"></i></span>
                      </div>
                      <div className="button is-warning" style={{transform: "scale(0.7)"}} onClick={() => props.deletePassword(x.id)}>
                        <span className="icon"><i className="fa fa-trash"></i></span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    Passwords: state.passwordState.passwordList
  }
}

let submit = (fung) => {
  confirmAlert({
    title: 'Confirm to submit',                        // Title dialog
    message: 'Are you sure to do this.',               // Message dialog
    childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
    confirmLabel: 'Confirm',                           // Text button confirm
    cancelLabel: 'Cancel',                             // Text button cancel
    onConfirm: () => fung()
  })
};

let mapDispatchToProps = (dispatch) => {
  return {
    getInitiate: () => dispatch(getPasswordInitiate()),
    deletePassword: (id) => {
      submit(() => dispatch(deletePasswordGo(id)))
    },
    searchPassword: (e) => {
      dispatch(searchPassword(e));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasMan)
