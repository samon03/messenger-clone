import React, { forwardRef } from 'react';
import './Message.css';

import {Card, CardContent, Typography} from '@material-ui/core';

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "messange__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography 
                    variant="h6"
                    component="h2">
                        { !isUser && `${message.username || "Unknown"}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
