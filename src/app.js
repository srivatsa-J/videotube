import express from 'express';
import cors from 'cors';
import e from 'express';
import cookieParser from "cookie-parser"

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

//common middlewares
app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

// import routes
import healthcheckRoutes from './routes/healthcheck.routes.js';
import userRouter from './routes/user.routes.js';
import {errorHandler} from './middlewares/erros.middleware.js';
 
// routes
app.use('/api/v1/healthcheck', healthcheckRoutes);
app.use('/api/v1/users', userRouter);
//fapp.use(errorHandler)

export {app};
