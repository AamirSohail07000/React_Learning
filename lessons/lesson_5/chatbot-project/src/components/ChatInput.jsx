import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';


export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputTest(event) {
    setInputText(event.target.value);

  }
  function sendMessage(){
    const newChatMessages = [
      ...chatMessages,   //Spread operator
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,   //Spread operator
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setInputText(''); // Remove text in the textbox
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange = {saveInputTest}
        value = {inputText}
        className= "chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}