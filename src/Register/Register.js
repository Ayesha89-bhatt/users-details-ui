import React, { useState } from 'react';
import UserService from '../Service/userService';

const spanCss = {
    color: "red"
}

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");

    const regPhn = /^\d{10}$/;

    /** function is used to register user */
    const registerUser = (e) => {
        e.preventDefault();
        let user = {
            'name': name,
            'email': email,
            'password': password,
            'phoneNumber': phoneNumber,
        }

        /** not useful */
        let valid = isValidUser(user);

        if (isValidUser(user)) {
            UserService.registerUser(user);
        }
    }

    /** this functionis used validate user properties */
    function isValidUser(user) {
        let isValid = true;
        if (user.name.length < 5) {
            setNameError("name should be more than 4 char");
            isValid = false;
        }

        if (!user.phoneNumber.match(regPhn)) {
            setPhoneNumberError("**number is not valid");
            isValid = false;
        }
        return isValid;
    }

    /** this function is used to reset form data */
    function editData() {
        setName("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
    }

    return (
        <div className="mb-3">
            <form onSubmit={(e) => registerUser(e)}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text"
                        className="form-control is-invalid"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="is-invalid">{nameError}</span>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">PhoneNumber</label>
                    <input type="phone-number"
                        className="form-control is-valid"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <span className="valid-feedback" style={spanCss}>{phoneNumberError}</span>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Register</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={editData}>reset
                </button>
            </form>
        </div>
    )
}
export default Register;