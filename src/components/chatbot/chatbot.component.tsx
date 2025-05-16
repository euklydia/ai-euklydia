import { useState, type KeyboardEvent, useEffect } from "react";
import { sendMessage } from "../../data/content/messages.data";
import DOMPurify from "dompurify";
import "./chatbot.style.css";
// Add near the top of the component
import { useRef } from "react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [occurences, setOccurences] = useState(0);
  // Add this state near other state declarations
  const [suggestions, setSuggestions] = useState([
    { id: "Web", text: "Création Web" },
    { id: "Marque", text: "Création de Marque" },
  ]);

  // Inside the component, add these refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Replace your existing scroll useEffect with this:
  useEffect(() => {
    if (isChatOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [isChatOpen]);

  // Add this effect to randomize suggestions when chat opens/closes
  useEffect(() => {
    const allSuggestions = [
      { id: "services", text: "services Euklydia?" },
      { id: "Réseaux Sociaux", text: "Stratégie Réseaux Sociaux" },
      { id: "Contenu", text: "Création de Contenu" },
      { id: "Web", text: "Création Web" },
      { id: "contact", text: "Contact Euklydia?" },
      { id: "Marque", text: "Création de Marque" },
      { id: "Suivi de Marque", text: "Suivi de Marque" },
    ];

    // Shuffle array and pick first 2
    const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
    if (!isLoading) setSuggestions(shuffled.slice(0, 2));
  }, [isChatOpen, messages.length]);

  useEffect(() => {
    if (!isChatOpen && messages.length > 0) {
      setHasNewMessages(true);
    }
  }, [messages, isChatOpen]);

  const handleSend = async (message?: string) => {
    if ((!inputMessage.trim() && !message) || isLoading) return;
    if (message) console.log("message", message);
    // User message
    const userMessage: Message = {
      text: message ? message : inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setHasNewMessages(false);
    setInputMessage("");
    sendMessage(occurences, userMessage.text)
      .then((response) => {
        console.log("response", response);
        setIsLoading(false);
        setOccurences((prev) => prev + 1);
        setMessages((prev) => [
          ...prev,
          {
            text: response.data?.message,
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            text: `
            <div class="error-message">
              <p>🚫 <strong>Désolé, une erreur s'est produite</strong></p>
              <p>Nous n'avons pas pu traiter votre demande. Veuillez réessayer plus tard.</p>
              ${
                error.message
                  ? `<p class="error-detail">${error.message}</p>`
                  : ""
              }
            </div>
          `,
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const createMarkup = (html: string) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="chatbot">
      {isChatOpen ? (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="header-content">
              <div className="header-icon">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="header-title">AI Assistant</div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="btn close-button"
              aria-label="Close chat"
            >
              <svg
                className="close-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div
            ref={messagesContainerRef}
            className="messages-container"
            style={{ overflowAnchor: "none" }} // Prevents auto-scroll on content changes
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-bubble ${message.isUser ? "user" : "bot"}`}
              >
                {!message.isUser && (
                  <div className="bot-indicator">
                    <div className="bot-dot"></div>
                    <span>Assistant</span>
                  </div>
                )}
                <div
                  className="message-content"
                  dangerouslySetInnerHTML={createMarkup(message.text)}
                />
                <time className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>
            ))}
            {isLoading && (
              <div className="loading-indicator">
                <div className="bounce-dot"></div>
                <div className="bounce-dot delay-1"></div>
                <div className="bounce-dot delay-2"></div>
              </div>
            )}

            {/* Add this empty div at the end */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="input-area">
            <div className="suggestions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  className="suggestion-button"
                  onClick={() => {
                    if (!isLoading) {
                      setInputMessage(suggestion.text);
                      // Optional: Auto-submit on click
                      handleSend(suggestion.text);
                    }
                  }}
                  style={{ fontSize: "12px" }}
                >
                  {suggestion.text}
                </button>
              ))}
            </div>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading}
              className="send-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="send-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          className={`chat-toggle ${hasNewMessages ? "ping" : ""}`}
          onClick={() => {
            setIsChatOpen(true);
            setHasNewMessages(false);
          }}
          aria-label="Open chat"
        >
          <svg
            className="toggle-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {hasNewMessages && <span className="ping-dot"></span>}
        </button>
      )}
    </div>
  );
};

export default Chatbot;
