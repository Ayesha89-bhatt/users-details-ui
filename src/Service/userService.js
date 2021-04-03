import axios from 'axios';
const UserService = {
    getUser,
    registerUser
}
 function registerUser(user) {
     console.log("service user ::" +JSON.stringify(user));
     instance.post("/post/addpost", user, {
         headers:{
         'Content-type': 'application/json'
        }
        })
 }

 function getUser(){
     console.log(JSON.stringify(instance));
     return instance.get('/post/getPost', {})
 }

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.response.use(response =>{
    return response;
});
export default UserService;