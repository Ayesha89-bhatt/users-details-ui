import React , {useState, useEffect}from 'react';
import UserService from '../Service/userService';
const UsersData = () => {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        console.log("use effect pe call aayi  ");
        async function getUsers(){
            let response= await UserService.getUser(); 
            console.log("data from backend :: "+JSON.stringify(response));
            setUsers(response.data); 
        }
        getUsers();
        }, []);

        //first ltr capital
      //  function firstLtrCaps(name) {
            //name = "abc"
        //}

        // this function is used to covert all char caps before @
        function convertFirstLtr(email) {
            if(email !== 'undefined' && email !== "") {
                var emArr = email.split("@");
                email = emArr[0].toUpperCase()+"@"+emArr[1];
            } else{
                email = "----";
            }
            
            return email;
        }

        return(
        <div>
            <h1><center>Users Details</center></h1>
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>
                            <tr key={user.id}>
                                <td>{user.name.toUpperCase()}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{convertFirstLtr(user.email)}</td>
                                <td><button className="btn btn-warning">Update</button><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            
                        )
                    }
                    
                </tbody>

            </table>
        </div>
        )
};

export default UsersData;