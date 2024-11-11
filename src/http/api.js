import axios from "axios";

const API= axios.create({
    baseURL:"https://oauth-backend-77re.onrender.com",
    headers:{
        "Content-Type":'application/json'
    }
    
})
export default API