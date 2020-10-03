import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const socket = require('socket.io-client')('http://localhost:3000')

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentList:[],
      chatList:[],
      userName:'',
      addInfo:[],
      myclose:false,
      fclose:false
    }
  }
  componentDidMount(){
    let name = window.prompt('input your username');
    if(!name){
      name = Date.now()
    }
    this.setState({userName:name})
    socket.emit('message', {type:'online', name, time:new Date().toLocaleString()})

    socket.on('broadcast', (msg) => {
      this.setState({studentList:msg.students})
    })
    socket.on('CLOSE', (msg) => {
      let newInfo = this.state.addInfo
      newInfo.push(msg)
      this.setState({addInfo:newInfo})
    })
    socket.on('CONTENT', (msg) => {
      let list = this.state.chatList
      list.push({user:msg.user, txt:msg.txt})
      this.setState({chatList:list})
    })
    socket.on('disconnect', () => {
      this.setState({fclose:true})
    })
  }

  send(){
    if (this.state.myclose){
      return false
    }else{
      let value = this.refs['textbox'].value
      this.refs['textbox'].value = ''
      socket.emit('message', {type:'content', content:value})
      let list = this.state.chatList
      list.push({user:this.state.userName, txt:value})
      this.setState({chatList:list})
    }
  }

  render(){
    let {chatList,addInfo} = this.state
    return (
      <div className="App">
        <header className="container">
        <div id="record-box" ref='record'>
          {
            chatList.map((v,index)=>{
              return <div className='left-div' key={index} ref='chatitem'>
                        <span className='name'>{v.user} : </span><span className='text'>{v.txt}</span>
                    </div>
            })           
          }
        </div>
        <div id="send-box">
          <textarea rows="1" cols="80" ref='textbox'></textarea>
          <div className="btn">
            <button type="submit" name="send" onClick={this.send.bind(this)}>Send</button>
          </div>
        </div>

        </header>
      </div>
    );
  }

}


export default App;
