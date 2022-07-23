import axios from "axios";
const connection = axios.create({
    baseURL:"http://localhost:18085"
});

export default connection;
