import React, {useState} from 'react';
function Login(){

    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const doCheckUser=(e)=>{
        e.preventDefault();
        let userDetails={
            'email':email,
            'password':password,
        }
    
    let resultValue = check(userDetails);
        if(resultValue===true){
        alert("Login Successfully");
        }
        else{
        alert("fill all the details again...");
        }
    }
     async function check(userDetails){
        let resultValue = false;
        let users= JSON.parse(localStorage.getItem('users'));
        if(typeof users!= 'undefined' && users!= null){
            for(let i=0; i<users.length; i++){
                console.log(users[i].email);
if(users[i].email===userDetails.email && users[i].password===userDetails.password){
                    console.log("valid user");
                    resultValue = true;
                }
            }
            
        }
        return resultValue;
        
    }
    
    return(
        <div className="mb-3">
            <form  onSubmit={(e)=> doCheckUser(e)}>
                <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="mb-3">
<label className="form-label">Password</label>
<input type="email" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

  <button type="submit" className="btn btn-primary mb-3">Login</button>
  </form>
</div>
        

    )
}
export default Login;