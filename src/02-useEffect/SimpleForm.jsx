import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'pierre',
        email: 'pierre@google.com'
    })

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const { username, email } = formState;


    useEffect(() => {
    }, [])

    useEffect(() => {
    }, [formState])

    useEffect(() => {
    }, [email])


    return (
        <>
            <h1>Simple Form</h1>
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
        </>
    )
}
