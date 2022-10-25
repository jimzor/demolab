import React from "react"
import { URL } from "../config"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import bckimage from "../assets/pexels-andrea-piacquadio-3768126.jpg"
export default function Home({ isAuth, setIsAuth }) {

    const req = async () => {
        const request = await fetch(`${URL}/api/login`, {
            method: "POST",
            body: JSON.stringify({
                username: "admin",
                password: "admin123"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const resData = await request.json()
        console.log(resData)
        if (resData.status == "ok")
            setIsAuth(true)
    }

    return (
        <div style={{
            height: '100vh',
            backgroundSize: 'cover',
            backgroundImage: `url(${bckimage})`
        }}>
            <div>Home</div>
            <div style={{
                height: '400px',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                padding: '50px',
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: '100px',
                boxShadow: '1px 2px 100px black',
            }}>
                <div style={{
                    position:'relative',
                    top:'-100px',
                    left:'-20px', 
                    background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                    height:'200px',
                    width:'400px',
                    borderRadius:50
                }}></div>
                <TextField
                    fullWidth
                    style={{ margin: '10px 0' }}
                    id="outlined-required"
                    label="username"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    fullWidth
                    style={{ margin: '10px 0' }}
                    variant="filled"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button variant="contained">Login</Button>
                <div style={{ margin: '10px auto' }}><span>Don't have a account?  </span><span style={{ fontWeight: 'bold', color: 'blue' }}>Sign up</span></div>
            </div>
            <button onClick={() => req()}>Click here</button>
        </div>
    )
}