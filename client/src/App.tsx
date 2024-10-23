import { useState } from 'react';
import './App.css';
import { QueryClient, useQuery } from '@tanstack/react-query';
import Header from './components/Header';
import QueueList from './components/QueueList';
import MessageViewer from './components/MessageViewer';
import axios from 'axios';

// Create a client for react-query
const queryClient = new QueryClient();

function App() {
    const [selectedQueue, setSelectedQueue] = useState('');
    const [message, setMessage] = useState('');

    // Fetch queues
    const { data: queues = {}, refetch: refetchQueues, isLoading, error } = useQuery({
        queryKey: ['queues'],
        
        queryFn: async () => {
            const response = await axios.get('http://localhost:3000/api/');
            return response.data;
        },
    });

    // Fetch queue messages for the selected queue
    const {
        data: queueMessage = [],
        refetch: refetchQueueMessage
    } = useQuery({
        queryKey: ['queuesMessage', selectedQueue],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/api/${selectedQueue}?timeout=1000`);
            return response.data;
        },
        enabled: false, // Disable automatic fetching
    });

    const handleQueueSelect = (queue: string) => {
        setSelectedQueue(queue);
        setMessage(''); // Clear previous message
    };

    const handleFetchMessage = () => {
        if (selectedQueue) {
            refetchQueueMessage(); 
            refetchQueues();

        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading queues</div>;

    return (
            <div className="app-container">
                <Header />
                <QueueList queues={queues} onSelect={handleQueueSelect} selectedQueue={selectedQueue} />
                <button onClick={handleFetchMessage} disabled={!selectedQueue}>
                    Go
                </button>
                <MessageViewer message={queueMessage} />
            </div>
    );
}

export default App;
