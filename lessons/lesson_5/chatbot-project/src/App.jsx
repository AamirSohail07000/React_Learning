import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
    // lift state up
    const [chatMessages, setChatMessages] = useState([{ 
      message: 'hello chatbot',
      sender: 'user',
      id : 'id1'
    }, {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id : 'id2'
    }, {
      message: 'can you get me todays date?',
      sender: 'user',
      id : 'id3'
    }, {
      message: 'Today is September 27',
      sender: 'robot',
      id : 'id4'
    }])
    // const [chatMessages, setChatMessage] = array
    //const chatMessages = array[0]; //Give current data
    //const setChatMessage = array[1]; // updater function

    return (
      <div className="app-container">

        <ChatMessages 
          chatMessages = {chatMessages}
        /> 
        <ChatInput 
          chatMessages = {chatMessages}
          setChatMessages = {setChatMessages}
        />
      </div>
    );
  }

export default App
