import React, {useState, useEffect} from 'react'
import UserService from '../Service/userService';

function Data() {
    const[users, setUsers] =  useState(null);

    useEffect(() => {
        console.log("use effect pe call aayi  ");
        async function getUsers(){
            let response= await UserService.getUser(); 
            console.log("data from backend :: "+JSON.stringify(response));
            setUsers(response.data); //to jldi bootstrap se ek table utha ke aa
        
        }
        getUsers();
        }, []);

    return (
        <div>
        <h1>hello</h1>
    
        </div>
    )
}

export default Data;
