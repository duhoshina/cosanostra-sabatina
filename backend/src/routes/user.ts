import * as express from 'express';
import { createUserController, deleteUserController } from '../controllers/userController'

const router: express.Router = express.Router();

router.post('/', createUserController);

router.delete('/', deleteUserController);

export default router;