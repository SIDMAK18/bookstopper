import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import ficRouter from './router/ficbook.router';
import childRouter from './router/childdata.router';
import editRouter from './router/editordata.router';
import examRouter from './router/examdata.router';
import mythRouter from './router/mytho.router';
import textRouter from './router/text.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './router/order.router';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin:['http://localhost:4200']
}));

app.use("/api/ficdata",ficRouter);
app.use("/api/childdata",childRouter);
app.use("/api/editordata",editRouter);
app.use("/api/examdata",examRouter);
app.use("/api/mythologydata",mythRouter);
app.use("/api/textbookdata",textRouter);
app.use("/api/users",userRouter);
app.use("api/orders",orderRouter);

const port=5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:"+port);
})