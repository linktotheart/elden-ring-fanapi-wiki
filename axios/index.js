import axios from 'axios';

export default axios.create({
  baseURL: 'https://eldenring.fanapis.com/api/',
  headers: {
    'Content-type': 'application/json',
  },
});
