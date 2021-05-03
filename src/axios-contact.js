import axios from 'axios';

const instance = axios.create({
    baseURL:'https://portfolio-anuruddha-default-rtdb.firebaseio.com/'
})
export default instance;