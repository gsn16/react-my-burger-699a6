import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-699a6.firebaseio.com/'
});

export default instance;