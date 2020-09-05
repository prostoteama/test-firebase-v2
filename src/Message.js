import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({curUser, username, message, time}, ref) => {
    const isUser = username === curUser

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 
                'message__userCard' : 
                'message__guestCard'}>
                <CardContent className="message__content">
                    <Typography
                    color="initial"
                    variant="h5"
                    component="h2"
                    >
                        {isUser ? message: `${message}: ${username}`}
                    </Typography>
                </CardContent>
            </Card>
            <h5 className="message__time">{time}</h5>

        </div>
    )
})

export default Message

