import * as express from 'express';
import { authUserController } from '../controllers/authController';

const router: express.Router = express.Router();

router.post('/', authUserController);

export default router;