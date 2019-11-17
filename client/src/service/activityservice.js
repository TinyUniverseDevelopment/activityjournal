import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/activities';

const getAll = () => {
  const res = axios.get(baseUrl);
  return res.then(res => res.data);
};

export default {
  getAll
};
