interface QueueListProps {
    queues: Record<string, any>;
    onSelect: (queue: string) => void;
    selectedQueue: string;
}

const QueueList = ({ queues, onSelect, selectedQueue }: QueueListProps) => {
    return (
        <div className="queue-list">
            <h3>Available Queues</h3>
            <ul>
                {Object.keys(queues).map((queue) => (
                    <li
                        key={queue}
                        onClick={() => onSelect(queue)}
                        className={queue === selectedQueue ? 'selected' : ''} 
                    >
                        {queue} ({queues[queue].length} messages)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QueueList;
