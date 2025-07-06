/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ token }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                });
                const data = await response.json();

            console.log(data)
            setLogin(result.data)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}></form>
            <div>
                <label htmlFor="email">Email:
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <label htmlFor="password">Password:
                    <input 
                        type="password"  
                        id="password"
                        value={password}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Login</button>
        </>
    )
}