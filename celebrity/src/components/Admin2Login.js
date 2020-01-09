import React, { useState } from 'react';
import useForm from './useLoginForm';
import { Route } from 'react-router-dom';
import validateLogin from './validateLogin';

const AdminLogin = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin)

    function submit() {
        console.log('Admin Success!!!')
        props.history.push("/Admin2")
        // return <Route exact path="/Admin2" />
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Admin Username: 
                </label>
                    <input
                        name="username"
                        type="text"
                        placeholder="username" 
                        className={`${errors.username && "inputError"}`}
                        value={values.username}
                        onChange={handleChange}
                    />
                
                {errors.username && <p className="error">{errors.username}</p>}
                <br></br>
                <label>
                    Admin Password:
                </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className={`${errors.password && "inputError"}`}
                        value={values.password}
                        onChange={handleChange}
                    />
                
                {errors.password && <p className="error">{errors.password}</p>}
                <br></br>
                <label>
                    Admin Email:
                </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className={`${errors.email && "inputError"}`}
                        value={values.email}
                        onChange={handleChange}
                    />
                
                {errors.email && <p className="error">{errors.email}</p>}
                <br></br>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default AdminLogin;