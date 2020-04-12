import React from 'react'

const ChatInput = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="message-form">
            <input
                type="text"
                placeholder="message..."
                value={message}
                className="chat-input-box"
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
            <button className="send-button" onClick={event => sendMessage(event)}>Send</button>
        </form>
    )
}

export default ChatInput;