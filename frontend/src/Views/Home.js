import React from "react"


export default function Home({isAuth, setIsAuth}) {

    const req = async () => {
        const request = await fetch("http://13.73.225.17/api/login", {
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
        <div>
            <div>Home</div>
            <button onClick={() => req()}>Click here</button>
        </div>
    )
}