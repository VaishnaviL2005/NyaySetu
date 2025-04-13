import React, { useState } from 'react';
import '../Chatbot.css';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleUserMessage = async () => {
    if (userInput.trim()) {
      // Add user message and temporary typing placeholder
      const newMessages = [
        ...messages,
        { text: userInput, sender: 'user' },
        { text: 'Typing...', sender: 'bot' },
      ];
      setMessages(newMessages);
      setUserInput('');
      setIsTyping(true);

      try {
        const response = await axios.post('http://localhost:5000/gemini/chat', {
          prompt: userInput,
        });

        const botReply = response.data.response;

        // Replace "Typing..." with actual bot response
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // remove last "Typing..."
          { text: botReply, sender: 'bot' },
        ]);
      } catch (error) {
        console.error("Error from Gemini backend:", error);
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleQuickAction = (text) => {
    setUserInput(text);
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
        <button onClick={() => handleQuickAction('How do I file an FIR?')}>Ask a Question</button>
        <button onClick={() => handleQuickAction('I need legal help.')}>Help</button>
        <button onClick={() => handleQuickAction('What is Section 379 IPC?')}>FAQ</button>
      </div>
    </div>
  );
};

export default Chatbot;
