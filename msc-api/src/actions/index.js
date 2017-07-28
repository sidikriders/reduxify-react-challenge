import Axios from 'axios'

export const getStarWars = () => {
  let angkaAcak = Math.floor(Math.random() * 87)
  return {
    type: "GET_STAR_WARS",
    payload: Axios.get('http://swapi.co/api/people/'+angkaAcak)
  }
}

export const getRandomCat = () => {
  return {
    type: "GET_CAT",
    payload: Axios.get('http://random.cat/meow')
  }
}

function date_converter () {
 var d = new Date();
   var m_names = ["January", "February", "March",
   "April", "May", "June", "July", "Augustus", "Sepetember",
   "October", "November", "December"];
   var date = d.getDate();
   var month = m_names[d.getMonth()];
   var year = d.getFullYear();
   return `${date} ${month} ${year}`;
}

export const postPassword  = (newPass) => {
  return function(dispatch) {
    Axios.post('http://localhost:3000/password',
    {...newPass, "createdAt": date_converter(), "updatedAt": date_converter()})
    .then(function(responze) {
      dispatch(getPasswordInitiate())
    })
    .catch(function(err) {
      alert('Error', err);
    })
  }
}

export const getPasswordInitiate  = () => {
  return {
    type: "GET_PASSWORD_INITIATE",
    payload: Axios.get('http://localhost:3000/password')
  }
}

export const deletePasswordGo = (id) => {
  return function (dispatch) {
    Axios.delete('http://localhost:3000/password/'+id)
    .then(function(response) {
      dispatch(getPasswordInitiate())
    })
    .catch(function(err) {
      alert("ERROR", err)
    })
  }
}

export const validatePassword = (val) => {

  let obj = {
    type: "VALIDATE_PASSWORD",
    payload: {
      class: "input",
      msg: ""
    }
  }

  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(val)) { // RegexSpecialCharacter + Number + Upper and Lower case character
    obj.payload.class = "input is-success"
    obj.payload.msg = "This password is good"
    return obj
  } else if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&$]{8,}$/.test(val)){ // RegexSpecialCharacter + Number
    obj.payload.class = "input is-danger"
    obj.payload.msg = "Password must consist of Uppercase and Lowercase Character"
    return obj
  } else if (/^(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}/.test(val)) { // RegexSpecialCharacter
    obj.payload.class = "input is-danger"
    obj.payload.msg = "Password must consist of letter & number"
    return obj
  } else if ( val.length > 8) {
    obj.payload.class = "input is-danger"
    obj.payload.msg = "Password must contain at least 1 special character"
    return obj
  } else {
    obj.payload.class = "input is-danger"
    obj.payload.msg = "Password must contain at least 8 characters"
    return obj
  }
}

export const searchPassword = (str) => {
  if (str === "") {
    return {
      type: "GET_PASSWORD_INITIATE",
      payload: Axios.get('http://localhost:3000/password')
    }
  } else {
    return {
      type: "FILTER_PASSWORD",
      payload: str
    }
  }
}
