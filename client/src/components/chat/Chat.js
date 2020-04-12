import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import queryString from 'query-string';
import { Row, Col } from 'antd';
import ChatBoxHeader from './ChatBoxHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

let socket;

const Chat = ({ location }) => {
    const [username, setUserName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const END_POINT = 'localhost:5000';

    useEffect(() => {
        const { username, room } = queryString.parse(location.search);

        socket = io(END_POINT);

        setUserName(username);
        setRoom(room);

        socket.emit('join', { username, room }, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [END_POINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('send_message', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <Row justify="center">
            <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12} className="chat-box-outer-container">
                <ChatBoxHeader room={room}/>
                <ChatMessages messages={messages} username={username} />
                <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </Col>
        </Row>
    )
}

export default Chat;