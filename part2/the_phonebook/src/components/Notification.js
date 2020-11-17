import React from 'react';

const Notification = ({message}) => {
    if(message === null) {
        return null
    }

    return(
        message.includes('deleted')? 
        <div className='error'>{message}</div>:
        <div className='success'>{message}</div>
    )
}

export default Notification;