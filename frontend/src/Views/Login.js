import React from "react"
import { URL } from "../config"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import bckimage from "../assets/pexels-andrea-piacquadio-3768126.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            <div></div>
            <div style={{
                height: '400px',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                padding: '50px',
                backgroundColor: 'white',
                borderRadius: 20,
                paddingTop: '50px',
                boxShadow: '1px 2px 100px black',
            }}>
                <div style={{
                    position: 'relative',
                    top: '-100px',
                    left: '-20px',
                    background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                    height: '200px',
                    width: '400px',
                    borderRadius: 50
                }}>
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Sign in</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div style={{ paddingTop: '10px', backgroundColor: 'white', borderRadius: 50, width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <FacebookIcon fontSize="large" color="primary" />
                        </div>
                        <div style={{ paddingTop: '10px', backgroundColor: 'white', borderRadius: 50, width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <GoogleIcon fontSize="large" color="primary" />
                        </div>
                        <div style={{ paddingTop: '10px', backgroundColor: 'white', borderRadius: 50, width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <GitHubIcon fontSize="large" color="primary" />
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'-50px'}}>
                    <TextField
                        fullWidth
                        style={{ margin: '10px 0' }}
                        id="outlined-required"
                        label="username"
                        defaultValue=""
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
                    <Button fullWidth variant="contained">Login</Button>
                    <div style={{ margin: '10px auto' }}><span>Don't have a account?  </span><span style={{ fontWeight: 'bold', color: 'blue' }}>Sign up</span></div>
                </div>
            </div>
            <button onClick={() => req()}>Click here</button>
        </div>
    )
}