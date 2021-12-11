import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8080"
});

export default {

//?????????? check put methods

getAllUsers(){
    return http.get('/listOfUsers')
},

getApprovedUsers(){
    return http.get('/approved')
},

getPendingUsers(){
    return http.get('/pending')
},

approvePending(user){
    // user.userId = userId
    return http.put('/approveUser', user)
},

rejectPending(user){
    return http.put('/rejectUser', user)
},


//THIS NEEDS TO BE ADDED ON THE USER CONTROLLER ON SERVER SIDE
getUserById(id) {
    return http.get(`/users/${id}`);
}

}