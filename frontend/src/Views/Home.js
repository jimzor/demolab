import React from "react"
import bckimage from "../assets/pexels-dave-morgan-2643596.jpg"
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});

export default function Home({ isAuth, setIsAuth, setRoute }) {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: 'black',
                boxShadow: 1,
                height: '650px',
                backgroundImage: `url(${bckimage})`,
                backgroundSize: 'cover'
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bgcolor: 'rgba(0,0,0,0.5)',
                    height: '650px',
                    width: '100%',

                    // p: 25,

                }}>
                    <Box style={{ marginLeft: '100px', marginTop: '200px' }}>
                        <h1 style={{ fontWeight: "bold", fontSize: 60, color: 'white' }}>NextGen Calculator App </h1>
                        <h3 style={{ color: 'white' }}>This is the calculator you need for your daily needs.</h3>
                        <h3 style={{ color: 'white' }}>NextGen Calculator is worlds best calculator.</h3>
                        <Box onClick={() => setRoute("login")} sx={{
                            height: '50px',
                            width: '200px',
                            color: 'white',
                            textAlign: 'center',
                            backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                            borderRadius: 20,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                cursor: 'pointer',
                            }
                        }}><h3>Start Calculating</h3></Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                bgcolor: 'white',
                boxShadow: 1,
                p: 10,
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Box sx={{
                    height: '300px',
                    width: '300px',
                    bgcolor: 'background.paper',
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '1px 10px 10px 10px #888888'
                }}>
                    <Box sx={{ fontWeight: 'bold', fontSize: 25 }}>
                        Users
                    </Box>
                    <Box sx={{ fontWeight: 'bold', fontSize: 60 }}>
                        1
                    </Box>
                </Box>
                <Box sx={{
                    height: '300px',
                    width: '300px',
                    bgcolor: 'background.paper',
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '1px 10px 10px 10px #888888'
                }}>
                    <Box sx={{ fontWeight: 'bold', fontSize: 25 }}>
                        Calculations
                    </Box>
                    <Box sx={{ fontWeight: 'bold', fontSize: 60 }}>
                        3
                    </Box>
                </Box>
                <Box sx={{
                    height: '300px',
                    width: '300px',
                    bgcolor: 'background.paper',
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '1px 10px 10px 10px #888888'
                }}>
                    <Box sx={{ fontWeight: 'bold', fontSize: 25 }}>
                        Supported Operations
                    </Box>
                    <Box sx={{ fontWeight: 'bold', fontSize: 60 }}>
                        4
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                bgcolor: 'black',
                boxShadow: 1,
                height: '100px',
            }}>

            </Box>



            {/* <div style={{
                height: '400px', backgroundColor: 'black', backgroundSize: 'cover',
                backgroundImage: `url(${bckimage})`,
            }}>
                <div style={{
                    position: 'absolute',
                    // height: '400px',
                    left: 0,
                    right: 0,
                    height: '400px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1
                }}>
                    <div style={{
                        height: '50px',
                        width: '1000px',
                        backgroundColor: '#CBCED1',
                        margin: 'auto',
                        marginTop: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: 10,
                        padding: '5px 10px'
                    }}>
                        <div>NextGen Calculator App</div>
                        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-around' }}>
                            <div>
                                Home
                            </div>
                            <div>
                                Login
                            </div>
                        </div>
                    </div>
                    <div style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', marginTop: '100px' }}>
                        <h1 style={{ fontWeight: "bold", fontSize: 60 }}>NextGen Calculator App </h1>
                        <h3>This is the calculator you need for your daily needs.</h3>
                        <h3>NextGen Calculator is worlds best calculator.</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100px' }}>
                    </div>
                </div>
            </div>
            <div style={{ height: '350px', backgroundColor: 'white' }}>
                <div style={{ height: '100px', width: '100px', border: '1px solid black' }}>
                    Users
                </div>
                <div style={{ height: '100px', width: '100px', border: '1px solid black' }}>
                    Calculations
                </div>
                <div style={{ height: '100px', width: '100px', border: '1px solid black' }}>
                    Operators
                </div>
            </div>
            <div style={{ height: '200px', backgroundColor: 'black' }}>
            </div> */}
        </ThemeProvider>
    )
}