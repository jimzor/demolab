import { Button, FilledInput, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import React, { useState } from "react"
import { URL } from "../config"


export default function Admin({ setRoute }) {
    const [textareaState, setTextareaState] = useState("")
    const [result, setResult] = useState("0")
    const submitTextHandler = async () => {
        const request = await fetch(`${URL}/api/calculate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                calc: textareaState
            })
        })

        const resData = await request.json()
        if (!isNaN(resData.data))
            setResult(resData.data)
        else
            setResult("NaN")
    }



    return (
        <div style={{ textAlign: 'center', background: '#8CDEDC', height: '100vh', padding: '50px' }}>
            <div style={{
                height: '50px',
                width: '1000px',
                backgroundColor: '#BA274A',
                margin: 'auto',
                marginTop: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 10,
                padding: '5px 10px'
            }}>
                <div style={{ color: 'white' }}><h2>NextGen Calculator App</h2></div>
                <div style={{ display: 'flex', width: '100px', justifyContent: 'space-around' }}>
                    <div>

                    </div>
                    <div>
                        <Button variant="contained" onClick={() => setRoute("home")}>Logout</Button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '100px' }}>
                <div style={{ color: '#BA274A' }}><h2>Result</h2></div>
                <span style={{ fontSize: 60, color: 'white' }}>{result}</span>
                <div style={{ width: '800px', margin: '0 auto' }}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Calculator</InputLabel>
                        <FilledInput
                            id="outlined-adornment-amount"
                            value={textareaState}
                            onChange={e => setTextareaState(e.target.value)}
                            // onChange={handleChange('amount')}
                            label="Amount"
                        />
                    </FormControl>
                    <Button onClick={() => submitTextHandler()} variant="contained">Calculate</Button>
                </div>
            </div>
        </div>
    )
}