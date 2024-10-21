class QueuesService {
    constructor(private readonly queues: Record<string, string[]> = {}) {}

    getAll() {
        return this.queues;
    }

    async getLatestFromQueue(queue: string, timeout: number = 1000): Promise<string> {
        const getAfterTimeout = (): Promise<string> => new Promise((resolve, reject) => {
            setTimeout(() => {
                const selectedQueue = this.queues[queue];
                if (!selectedQueue || selectedQueue.length === 0) {
                    resolve('');
                    return;
                }
        
                resolve(selectedQueue[selectedQueue.length - 1]);
            }, timeout);
        });
        

        const message = await getAfterTimeout();
        return message;
    }

    addMessageToQueue(queue: string, message: string): void {
        const selectedQueue = this.queues[queue];
        if(!selectedQueue) {
            this.queues[queue] = [message];
        } else {
            this.queues[queue].push(message);
        }
    }
}

const queueService = new QueuesService();
export default queueService;