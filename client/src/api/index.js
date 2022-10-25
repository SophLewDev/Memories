import axios from 'axios';

const url = 'http://localhost:5000/posts'; // url pointing to our backend route
// all actions to our backend will be done using Redux

export const fetchPosts = () => axios.get(url)