// index.js
const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json({ limit: "5mb" }));
// app.use(cors({ credentials: true, origin: "*" }));


const sendSyslog = async (message) => {
    var syslog = require("syslog-client");
    var client = syslog.createClient("192.168.1.37");

    await client.log("FancyCalculatorApp " + message);
    client.close()
}


app.use((req, res, next) => {
    next()
    const allowedOrigins = ['http://localhost:3000', 'http://13.73.225.17'];
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*')
    }
    res.setHeader('Access-Control-Allow-Methods', '*', 'GET, POST, PUT, PATCH, DELETE, OPTIONS',)
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
});


const tokens = []

app.post('/api/login', (req, res) => {
    console.log('login')
    console.log(req.body)
    const username = req.body.username
    const password = req.body.password
    console.log(req.headers)
    if (password == "admin123" && username == "admin") {
        const token = Math.random().toString()
        tokens.push(token)
        sendSyslog(`Authentication with username ${username} from ip address: ${req.headers["x-forwarded-for"]} successful!`)
        return res.json({ status: "ok", token: token })
    } else {
        sendSyslog(`Authentication with username ${username} with ip address: ${req.headers["x-forwarded-for"]} failed`)
        return res.statusCode(400).json({ message: "Authentication failed." })
    }
})

app.post("/api/calculate", (req, res) => {
    //check token
    console.log(req.body.calc)
    return res.json({ status: "Note added", data: eval(req.body.calc) })
})



app.listen(3000, () => console.log('Server is up and running'));