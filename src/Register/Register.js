import React, {useState} from 'react';
import UserService from '../Service/userService';

function Register() {
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const[phoneNumber, setPhoneNumber]= useState("");
    const[nameError, setNameError]= useState("");
    const[phoneNumberError, setPhoneNumberError] = useState("");
    

    const registerUser=(e)=>{
        e.preventDefault();

       let user={
            'name': name,
            'email': email,
            'password': password,
            'phoneNumber': phoneNumber,
        }
    let valid = isValidUser(user);

    if(valid) {
        UserService.registerUser(user);
    }


    function isValidUser(user){
        let isValid = true;
        if(user.name.length<5){
            setNameError("length is too short");
            isValid = false;
        }
        let regPhn = /^\d{10}$/;
        if(user.phoneNumber!=='undefined'){
        if(user.phoneNumber.match(regPhn)){
        
        setPhoneNumberError("");
            isValid = true;
        }
        else{
            setPhoneNumberError("**number is not valid");
            isValid = false;
        }
    }

        return isValid;
    }
        /*let users= JSON.parse(localStorage.getItem('users'));
        if(typeof users==='undefined' || users === null){
            users=[];
        }
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users))*/
    }
   async function editData(){

        let  data = await UserService.getUser();
        console.log("data from server : "+JSON.stringify(data.data));

        setName(name=>{
            name=("")
        
        })
        setEmail(email=>{
            email=("")
    
        })
        setPassword(password=>{
            password=("")
        
        })
        
        setPhoneNumber(phoneNumber=>{
            phoneNumber=("")
        })
        }

    
    return(
        <div className="mb-3">
            <form onSubmit={(e)=> registerUser(e)}>
            <div className="mb-3">
            <label className="form-label">Username</label> 
         <input type="text" className="form-control is-invalid" value={name} onChange={(e)=> setName(e.target.value)}/>
            <span className="is-invalid">{nameError}</span> 
           </div>
           <div className="mb-3">
           <label className="form-label">Email</label> 
<input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/>
         </div> 
         <div className="mb-3">
         <label className="form-label">Password</label> 
<input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}/>
         </div>
         <div className="mb-3">
         <label className="form-label">PhoneNumber</label> 
<input type="phone-number" className="form-control is-valid" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
<span className="valid-feedback" style={color:"red"}>{phoneNumberError}</span>
         </div>
<button type="submit" className="btn btn-primary mb-3">Register</button>
<button type="reset" className="btn btn-primary mb-3" onClick={editData}>Reset
</button>
         </form>
        </div>
    )
    }
export default Register;