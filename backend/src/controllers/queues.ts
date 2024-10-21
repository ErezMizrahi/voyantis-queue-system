import { Request, Response } from "express";
import queueService from "../services/queues";


export const getNextMessageFromQueue = async (req: Request<{ queue_name: string}, {}, {}, { timeout: number}>, res: Response) => {
    const queueName = req.params.queue_name;
    const timeout = req.query.timeout;
    const latestMessage = await queueService.getLatestFromQueue(queueName, timeout);
    if(latestMessage.length < 1) {
        res.status(204);
        res.end();
    }

    res.status(200).json(latestMessage);
}

export const addMessageToQueue = async (req: Request, res: Response) => {
    const queueName = req.params.queue_name;
    const { message } = req.body;
    queueService.addMessageToQueue(queueName, message);
    
    res.status(201).end();
}

export const getAllQueues = async (req: Request, res: Response) => {
    const getQueues = queueService.getAll();
    
    res.status(200).json(getQueues);
}