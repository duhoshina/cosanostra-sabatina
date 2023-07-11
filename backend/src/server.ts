import cors from 'cors';
import express from 'express';
import userRoute from './routes/user';
import authRoute from './routes/auth';
import adminRoute from './routes/admin';
import authenticatedMiddleware from './middlewares/authMiddleware';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/admin', authenticatedMiddleware, adminRoute);

export default app;