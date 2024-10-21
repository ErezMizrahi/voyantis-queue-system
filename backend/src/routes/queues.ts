import { Router } from 'express'
import { getNextMessageFromQueue, addMessageToQueue, getAllQueues } from '../controllers/queues';
import { body } from 'express-validator';

const router = Router();

router.get('/', getAllQueues);

router.get('/:queue_name', getNextMessageFromQueue);

router.post('/:queue_name',[
    body('message')
    .trim()
    .notEmpty()
    .withMessage('message must be valid'),
], addMessageToQueue);


export { router as queuesRouter };