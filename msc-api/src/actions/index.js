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
