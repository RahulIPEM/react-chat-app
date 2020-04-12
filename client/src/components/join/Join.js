import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, ClusterOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Join = () => {
    const [username, setUserName] = useState('');
    const [room, setRoom] = useState('');

    const onFinish = value => {
        console.log(`Received values of form: ${value} => `, value);
    }

    return (
        <Row justify="center" className="mtop-join">
            <Col xs={20} sm={18} md={16} lg={6} xl={6} xxl={6} className="center-align">
                <Title>Join Chat</Title>
                <hr className="divider"/>
                <Form name="chat_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please, input your Username!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={event => setUserName(event.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="room"
                        rules={[{ required: true, message: 'Please, input room, you want to join!' }]}>
                        <Input prefix={<ClusterOutlined className="site-form-item-icon" />} type="text" placeholder="Room" onChange={event => setRoom(event.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        <Link onClick={event => (!username || !room) ? event.preventDefault() : null} to={`/chat?username=${username}&room=${room}`}>
                            <Button type="primary" htmlType="submit" className="login-form-button">Join Chat</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Join;