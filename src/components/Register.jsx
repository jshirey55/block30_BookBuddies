import { useState } from 'react'
import '../styles/navigation.css'


function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: firstName,
                        lastname: lastName,
                        email: email,
                        password: password
                    })
                }
            )
            const result = await response.json()
            console.log(result)

            setMessage(result.message)

        } catch (error) {
            // setError(error.message) 
            setError(result.message)
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')

    }

    return (
        <>
        <div>
            <h3>
                {message && <p style={{ color: 'orange' }}>{message}</p>}
            </h3>  
        </div>     

        <div className='regisForm'>
            <h2>Registration Form</h2>       
                
            <form onSubmit={handleSubmit}>
                <label>
                    <p>First Name: </p>
                    <input 
                        type='text'
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
                <label>
                    <p>Last Name: </p>
                    <input 
                        type='text'
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
                <label>
                    <p>Email: </p>
                    <input 
                        type='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    <p>Password: </p>
                    <input 
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button type='submit' className='regisBtn'>Register</button>
            </form>
        </div>
    </>
    )
    
}


export default Register