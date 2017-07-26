import React from 'react'
import { connect } from 'react-redux'

import logo from '../logo.svg'
import { getRandomCat } from '../actions'

const RandomCat = (props) => {
    if (props.gambar === "") {
      return (
        <div>
          <h1 className="title is-1">Random Cat</h1>
          <p className="subTitle is-3">Let's get a cat!</p>
          <hr />
          <button className="button is-info" onClick={(e) => props.getCat()}>Get One!</button>
        </div>
      )
    } else if (props.gambar === "wait") {
      return (
        <div>
          <h1 className="title is-1">Random Cat</h1>
          <p className="subTitle is-3">Let's get a cat!</p>
          <hr />
          <img src={logo} className="App-logo2" alt="logo" />
          <br />
          <br />
          <button className="button is-info" onClick={(e) => props.getCat()}>Get One!</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="title is-1">Random Cat</h1>
          <p className="subTitle is-3">Let's get a cat!</p>
          <hr />
          <img src={props.gambar.file} alt="gambar-kucing" style={{height: "300px"}}/>
          <br />
          <br />
          <button className="button is-info" onClick={(e) => props.getCat()}>Get Another One!</button>
        </div>
      )
    }
}


let mapStateToProps = (state) => {
  console.log(state.getCat);
  return {
    gambar: state.getCat.randomCat
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getCat: () => {dispatch(getRandomCat())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomCat)
