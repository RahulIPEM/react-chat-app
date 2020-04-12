import React from 'react'
import { Row, Col } from 'antd';
import { MessageOutlined, CloseCircleOutlined } from '@ant-design/icons';


const ChatBoxHeader = ({ room }) => {
    return (
        <Row justify="center" className="chat-box-container">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="left-header-container">
            <p><MessageOutlined twoToneColor="#ffffff"/> {room}</p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="right-header-container">
                <CloseCircleOutlined />
            </Col>
        </Row>
    )
}

export default ChatBoxHeader;