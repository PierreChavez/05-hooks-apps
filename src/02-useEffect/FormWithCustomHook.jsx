import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onReset, username, email, password }= useForm( {
        username: '',
        email: '',
        password: ''
    });
   
    //const { username, email, password} = formState; 



    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />
            <input
                type="text"
                className='form-control'
                placeholder='UserName'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            {
                (username === 'pierre2') && <Message />
            }

            <input
                type="text"
                className='form-control mt-2'
                placeholder='email@google.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onReset} className="btn btn-primary mt-2">Reset</button>
        </>
    )
}
