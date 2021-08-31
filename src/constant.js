import axios from "axios";

// const base_url="http://127.0.0.1:8000/";
// const base_url="https://sabertoothdashboard.herokuapp.com/";
const base_url="http://74.207.225.205:8000/";

export default axios.create({
    baseURL:base_url,
});

localStorage.setItem("base_url", base_url);
















