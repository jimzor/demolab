import React from "react"
import bckimage from "../assets/pexels-thisisengineering-3861969.jpg"

export default function Home({ isAuth, setIsAuth }) {



    return (
        <>
            <div style={{
                position: 'absolute',
                // height: '400px',
                left: 0,
                right: 0,
                height: '500px',
                backgroundSize: 'cover',
                backgroundImage: `url(${bckimage})`,
                zIndex: 0
            }}>
                <div style={{
                    position: 'absolute',
                    // height: '400px',
                    left: 0,
                    right: 0,
                    height: '500px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1
                }}>
                    <div style={{
                        height: '50px',
                        width: '1000px',
                        backgroundColor: '#CBCED1',
                        margin: 'auto',
                        marginTop: '5px',
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
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100px' }}>
                    </div>
                </div>
            </div>
            <div>asdfasfda</div>
            <div>asdfasfda</div>
            <div>asdfasfda</div>
            <div>asdfasfda</div>
            <div>asdfasfda</div>
            <div>asdfasfda</div>
            <div>asdfasfda</div>
        </>
    )
}