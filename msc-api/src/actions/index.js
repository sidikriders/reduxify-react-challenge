import Axios from 'axios'
import Chance from 'chance'

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
    {...newPass, "id": new Chance().guid(), "createdAt": date_converter(), "updatedAt": date_converter()})
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
