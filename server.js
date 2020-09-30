const express = require('express')
const app = express()
const path = require('path')
const server = require('http').Server(app)

app.use(express.static(path.resolve(__dirname,'../public')))

const io = require('socket.io')(server)

let clients = []
let students = []

io.sockets.on('connection', (client) => {
    console.log('connecting...');
    clients.push(client)

    client.on('message', (params) => {
        switch(params.type){
            case 'online':{
                client.name = params.name
                client.broadcast.emit('ON_LINE', {time:params.time, txt:'user'+client.name+'joining'})
                students.push(params.name)
                io.sockets.emit('broadcast', {students})
            };
            break;
            case 'content':{
                client.broadcast.emit('CONTENT', {user:client.name, txt:params.content})
            };
            break;
        }
    })
    client.on('disconnect', () => {
        console.log(client.name, 'client exiting..');
        let index = students.findIndex(v=>v===client.name)
        students.splice(index, 1)
        io.sockets.emit('broadcast', {students})
        client.broadcast.emit('CLOSE', {time:new Date().toLocaleString(), txt:"user"+client.name+"exiting.."})
    })
})

server.listen(3000, () => {
    console.log('client starting..');
})