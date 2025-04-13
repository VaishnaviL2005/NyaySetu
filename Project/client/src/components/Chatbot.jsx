import React, { useState } from 'react';
import '../Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Function to handle user message submission
  const handleUserMessage = () => {
    if (userInput.trim()) {
      setMessages([
        ...messages,
        { text: userInput, sender: 'user' },
        { text: 'Typing...', sender: 'bot' }, // Temporary typing indicator
      ]);
      setUserInput('');
      setIsTyping(true);

      // Simulating a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { text: 'I am here to help you!', sender: 'bot' },
        ]);
        setIsTyping(false);
      }, 1500); // Simulate response delay
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="chatbot-page">
      {/* Header Section with Image and Welcome Message */}
      <div className="header-with-image">
        <h2>Welcome to Shastra Bot!</h2>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            <p>{message.text}</p>
            <div className="timestamp">{new Date().toLocaleTimeString()}</div>
          </div>
        ))}
        {isTyping && <div className="typing">Shastra Bot is typing...</div>}
      </div>

      {/* Input Area */}
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions">
        <button>Ask a Question</button>
        <button>Help</button>
        <button>FAQ</button>
      </div>
    </div>
  );
};

export default Chatbot;
