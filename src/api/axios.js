import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '200fca9efcaf457145e912f547245e22',
    language: 'en-US',
  },
});
export default instance;
