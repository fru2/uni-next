'use client';

import { useState } from "react";
import { TextField } from "@mui/material";
import Nav from "@/app/components/Nav";
import Link from "next/link"; // Import Link from next/link for client-side navigation

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Check if email and password match the predefined credentials
        if (email === 'faculty@pes.com' && password === 'password') {
            // Authentication successful, navigate to facultyPanel page
            setLoginState();
            window.location.href = '/pages/facultyPanel'; // Use window.location for client-side navigation
        }
        else if (email === 'dean@pes.com' && password === 'password') {
            setLoginState();
            window.location.href = '/pages/deanPanel';
        }
        else if (email === 'vc@pes.com' && password === 'password') {
            setLoginState();
            window.location.href = '/pages/deanPanel';
        }
        else if (email === 'librarian@pes.com' && password === 'password') {
            setLoginState();
            window.location.href = '/pages/deanPanel';
        } else {
            // Display error message or handle invalid credentials
            alert('Invalid email or password. Please try again.');
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const setLoginState = () => {
        localStorage.setItem('loginState', true);
    }

    return (
        <>
            <Nav disable={true} />
            <div className="flex w-max gap-4 items-center justify-center flex-col absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                <TextField
                    id="email-field"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    id="password-field"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    onClick={handleLogin}
                    className="mt-4 min-w-full bg-deep-blue hover:bg-deep-blue-hover text-white py-2 px-4 rounded"
                >
                    Login
                </button>
            </div>
        </>
    );
}
