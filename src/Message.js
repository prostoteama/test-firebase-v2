import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({curUser, username, message}, ref) => {
    const isUser = username === curUser

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 
                'message__userCard' : 
                'message__guestCard'}>
                <CardContent>
                    <Typography
                    color="initial"
                    variant="h5"
                    component="h2"
                    >
                        {isUser ? message: `${message}: ${username}`}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message

