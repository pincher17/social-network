import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const usersApi = {
    getFriends(){
        return instance.get(`users`).then(response =>{
            return response;
        })
    },
    getUser(userId){
        return instance.get(`users/${userId}`).then(response =>{
           return response;
        })
    },
    getPosts(){
        return instance.get(`posts`).then(response =>{
            return response;
        })
    },
    getPostUser(userId){
        return instance.get(`posts?userId=${userId}`).then(response =>{
            return response;
        })
    },
} 

export const authApi = (login, password) => {

    if(login === 'Admin' && password === '12345'){
        let response = new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve(true);
            }, 1500);
          });
          return response;
    }else{
        let response = new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve(false);
            }, 1500);
          });
          return response;
    }

 
          
} 
