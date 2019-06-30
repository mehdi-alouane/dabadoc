import axios from 'axios'

const apiURL = `http://localhost:3000/api/v1`

export default axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
