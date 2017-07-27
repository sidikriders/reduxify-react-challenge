import React from 'react'
import { connect } from 'react-redux'

import logo from '../logo.svg'
import { getStarWars } from '../actions'

const StarWars = (props) => {

  if (props.starWars === "" || props.starWars === undefined) {
    // di uncomment kalu mau langsung keluar
    // props.getStarWarsCharacter()
    return (
      <div>
        <h1 className="title is-1">Star Wars</h1>
        <p className="subtitle is-5">Let's get you some Star Wars character!</p>
        <hr />
        <div className="field">
          <button className="button is-primary" onClick={(e) => props.getStarWarsCharacter()}>Give Me Some Star Wars!</button>
        </div>
      </div>
    )
  } else if (props.starWars === "wait") {
    return (
      <div>
        <h1 className="title is-1">Star Wars</h1>
        <p className="subtitle is-5">Let's get you some Star Wars character!</p>
        <hr />
        <div className="field" style={{marginBottom: "30px"}}>
          <button className="button is-primary" onClick={(e) => props.getStarWarsCharacter()}>Give Me Some Star Wars!</button>
        </div>
        <div className="field">
          <div className="App-header field">
            <img src={logo} className="App-logo2" alt="logo" />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="title is-1">Star Wars</h1>
        <p className="subtitle is-5">Let's get you some Star Wars character!</p>
        <hr />
        <div className="field" style={{marginBottom: "30px"}}>
          <button className="button is-primary" onClick={(e) => props.getStarWarsCharacter()}>Give Me Some Star Wars!</button>
        </div>
        <div className="field" style={{textAlign: "left"}}>
          <p className="subTitle is-3">Name: {props.starWars.name}</p>
          <p className="subTitle is-3">Birthdate: {props.starWars.birth_year}</p>
          <p className="subTitle is-3">Height: {props.starWars.height}</p>
          <p className="subTitle is-3">Weight: {props.starWars.mass} Kg</p>
          <p className="subTitle is-3">Picture: <a href={"https://www.google.com/search?q=" + props.starWars.name + " Star Wars&safe=off&hl=en&as_st=y&tbm=isch"} target="_blank">{props.starWars.name}</a></p>
          <p className="subTitle is-3">more info: <a href={props.starWars.url} target="_blank">{props.starWars.url}</a></p>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    starWars: state.getStarWars.starWarsSWD
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getStarWarsCharacter: () => {dispatch(getStarWars())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWars)
