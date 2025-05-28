import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbot visibility

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    try {
      const response = await fetch("http://localhost:3000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([...updatedMessages, { from: "bot", text: data.reply }]);
    } catch (error) {
      setMessages([...updatedMessages, { from: "bot", text: "Server error. Please try later." }]);
    }

    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <button className="chatbot-toggle-button" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            🤖 SportsFit Chat
            <button className="chatbot-close-button" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              placeholder="Ask something..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
