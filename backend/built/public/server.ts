import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import cors from 'cors';
import ficRouter from '../../src/router/ficbook.router';
import childRouter from '../../src/router/childdata.router';
import editRouter from '../../src/router/editordata.router';
import examRouter from '../../src/router/examdata.router';
import mythRouter from '../../src/router/mytho.router';
import textRouter from '../../src/router/text.router';
import userRouter from '../../src/router/user.router';
import { dbConnect } from '../../src/configs/database.config';
import orderRouter from '../../src/router/order.router';
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
app.use("/api/orders",orderRouter);
app.use(express.static('public'));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
const port=process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:"+port);
})