import React, { useState } from "react"
import { URL } from "../config"


export default function Admin() {
    const [textareaState,setTextareaState] = useState("")
    const [result, setResult] = useState("0")
    const submitTextHandler = async () => {
        const request = await fetch(`http://${URL}/calculate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                calc: textareaState
            })
        })

        const resData = await request.json()
        setResult(resData.data)
    }



    return (
        <div style={{ textAlign: 'center' }}>
            <div>Admin</div>
            <h3>{result}</h3>
            <textarea onChange={e => setTextareaState(e.target.value)} value={textareaState}></textarea>
            <button onClick={() => submitTextHandler()}>Submit</button>
        </div>
    )
}