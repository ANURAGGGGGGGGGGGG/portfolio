import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiMessageSquare, FiX, FiMinus } from 'react-icons/fi';
import './Chatbot.css';
import responses from './responses';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm your portfolio assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatboxRef = useRef(null);

  const quickQuestions = [
    "Hello",
    "Who are you",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
    "Freelance"
  ];

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (text = input) => {
    const messageToSend = text.trim();
    if (messageToSend) {
      const userMessage = { text: messageToSend, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        const botResponse = getBotResponse(messageToSend);
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleQuickQuestion = (question) => {
    handleSend(question);
  };

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    for (const keyword in responses) {
      if (lowerCaseInput.includes(keyword)) {
        return responses[keyword];
      }
    }
    return responses.default;
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <FiMessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="header-info">
              <div className="online-indicator"></div>
              <h3>Portfolio Assistant</h3>
            </div>
            <div className="header-actions">
              <button onClick={() => setIsOpen(false)} title="Minimize">
                <FiMinus size={20} />
              </button>
            </div>
          </div>

          <div className="chatbot-messages" ref={chatboxRef}>
            {messages.map((message, index) => (
              <div key={index} className={`message-group ${message.sender}`}>
                <div className={`message ${message.sender}`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message-group bot">
                <div className="message bot typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>

          <div className="quick-questions">
            {quickQuestions.map((question, index) => (
              <button 
                key={index} 
                className="quick-question-btn"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button 
              className="send-button" 
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
