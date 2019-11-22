import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/activities';

const getAll = () => {
  const res = axios.get(baseUrl);
  return res.then(res => res.data);
};

const getLength = () => {
  const res = axios.get(`${baseUrl}/length`)
  return res.then(res => res.data)
}

const getPage = (pageNumber, filterBy) => {
  const res = axios.get(`${baseUrl}/paginate`, {
    params: {
      page: pageNumber,
      type: filterBy
    }
  })
  return res.then(res => res.data)


}

const activityPost = (actObj) => {
  const res = axios.post(baseUrl, actObj)
  return res.then(res => res.data).catch(error => console.log(error.message))
}

const removeActivity = (activityId) => {
  const res = axios.delete(`${baseUrl}/${activityId}`)
  return res
}

export default {
  getAll,
  activityPost,
  getPage,
  getLength,
  removeActivity
};