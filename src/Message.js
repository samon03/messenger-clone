import React from 'react'
import './Message.css';

import {Card, CardContent, Typography} from '@material-ui/core';

function Message({message, username}) {
    const isUser = username === message.username;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "messange__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography 
                    variant="h6" color="white" 
                    component="h2">
                        {message.username}: {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
