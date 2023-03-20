'use strict';
const path = require("path")
const express = require('express')
const app = express()
const port = 1337

app.get('/', (req, res) => {
    res.sendFile("./index.html", {
        root: path.join(__dirname,"")
    })
})

app.get('/game', (req, res) => {
    res.sendFile("./typemaster.html", {
        root: path.join(__dirname,"")
    })
})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log("Server is listening on port " + port)
    console.log("Server URL is http://localhost:" + port)
})



// const http = require('http');
// const fs = require('fs')
// const port = 1337;

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile('typemaster.html', function (error, data) {
//         if (error) {
//             res.writeHead(404)
//             res.write('Error: File not found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// })


// server.listen(port, function (error) {
//     if (error) {
//         console.log("Something went wrong", error)
//     } else {
//         console.log("Server is listening on port " + port)
//         console.log("Server URL is http://localhost:" + port)
//     }
// })
