import React, {useEffect, useRef} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatMessages = ({ messages, username }) => {
    let user_name = username.trim().toLowerCase();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(scrollToBottom, [messages]);

    return(
        <div className="messages">
            {
                messages.map((message, index) => {
                    return(
                        <div id="chatdiv" key={index}>
                            {
                                message.user === user_name ? 
                                    <div className="message-div justify-end">
                                        <p className="sent-text pr-10">{user_name}</p>
                                        <div className="message-box background-dark">
                                            <p className="message-text sent-message">{message.text}</p>
                                        </div>
                                    </div>:
                                    <div className="message-div justify-start">
                                        <div className="message-box background-light">
                                            <p className="message-text received-msg">{message.text}</p>
                                        </div>
                                        <p className="sent-text pl-10">{message.user}</p>
                                    </div>
                            }
                        </div>
                    )
                })
            }
            <div ref={messagesEndRef}></div>
        </div>
    )
}

export default ChatMessages;