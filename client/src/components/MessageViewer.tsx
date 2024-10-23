import React from 'react';

interface MessageViewerProps { 
    message: string;
}

const MessageViewer = ({ message }: MessageViewerProps ) => {
    return (
        <div className="message-viewer">
            <p>{message || 'Empty.'}</p>
        </div>
    );
};

export default MessageViewer;
