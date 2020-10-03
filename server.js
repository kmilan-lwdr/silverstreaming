const express = require('express')
const app = express()
const path = require('path')
const server = require('http').Server(app)

app.use(express.static(path.resolve(__dirname,'../public')))

const io = require('socket.io')(server)

let clients = {}
let students = []
let onlineCount = 0;

io.sockets.on('connection', (client) => {
    console.log('connecting...');

    client.on('login', (obj) => {
        client.id = obj.uid;
        if (!clients.hasOwnProperty(obj.uid)){
            clients.push(client)
            clients[obj.uid] = obj.username;
            onlineCount++;
        }

        io.emit('lohin', {clients:clients, onlineCount:onlineCount, user:obj})
    })

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
        
        console.log(client.name, 'user exiting..');
        let index = students.findIndex(v=>v===client.name)
        students.splice(index, 1)
        io.sockets.emit('broadcast', {students})
        client.broadcast.emit('CLOSE', {time:new Date().toLocaleString(), txt:"user"+client.name+"exiting.."})
    })
})

server.listen(3000, () => {
    console.log('client starting..');
})