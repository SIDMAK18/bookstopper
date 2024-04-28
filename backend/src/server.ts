import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import childRouter from './router/childdata.router';
import userRouter from './router/user.router';
import editRouter from './router/editordata.router';
import examRouter from './router/examdata.router';
import ficRouter from './router/ficbook.router';
import mythRouter from './router/mytho.router';
import textRouter from './router/text.router';
import orderRouter from './router/order.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/childdata", childRouter);
app.use("/api/users", userRouter);
app.use("/api/editordata", editRouter);
app.use("/api/exambookdata", examRouter);
app.use("/api/ficdata", ficRouter);
app.use("/api/mythologydata", mythRouter);
app.use("/api/textbookdata", textRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public','browser', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})