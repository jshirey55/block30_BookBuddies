/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import "../styles/login.css";

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

        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="loginForm">
            <div>
                <label htmlFor="email" className="email">Email:
                    <input 
                        className="email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label><br />
                <label htmlFor="password" className="password">Password:
                    <input 
                        className="password"
                        type="password"  
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div>
            <button type="submit" className="submit">Login</button>
        </form>
        </>
    )
}