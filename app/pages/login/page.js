'use client'; 

import { TextField } from "@mui/material";
import { OutlineButton, SolidButton } from "@/app/components/Button";
import Nav from "@/app/components/Nav";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {

    }

    return (
        <>
            <Nav disable='true'></Nav>
            <div className="flex w-max gap-4 items-center justify-center flex-col absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                <TextField id="email-field" label="Email" variant="outlined" size="small"/>
                <TextField id="password-field" label="Password" type="password" variant="outlined" size="small"/>
                <SolidButton text='login' link='#' style='mt-4 min-w-full'></SolidButton>
            </div>
        </>
    )
}
