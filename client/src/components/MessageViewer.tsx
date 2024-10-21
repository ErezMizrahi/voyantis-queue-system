import React from 'react';

interface MessageViewerProps { 
    message: string;
}

const MessageViewer = ({ message }: MessageViewerProps ) => {
    return (
        <div className="message-viewer">
            <p>{message || 'Select a queue and click "Go" to fetch the latest message.'}</p>
        </div>
    );
};

export default MessageViewer;
