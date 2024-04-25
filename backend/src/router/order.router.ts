import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constants/httpstatus";
import { OrderModel } from "../models/order.model";
import { OrderStatus } from "../constants/orderstatus";

const router=Router();
router.post('/create',expressAsyncHandler(async(req:any,res:any)=>{
        const requestOrder=req.body;
    if(requestOrder.items.length<=0){
        res.send(HTTP_BAD_REQUEST).send('Cart is empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });

    const newOrder = new OrderModel({...requestOrder,user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
   })
)

router.get('/newOrderForCurrentUser', expressAsyncHandler( async (req:any,res ) => {
    const order= await getNewOrderForCurrentUser(req);
    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

router.post('/pay', expressAsyncHandler( async (req:any, res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    res.send(order._id);
}))

router.get('/track/:id', expressAsyncHandler( async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    res.send(order);
}))

export default router;

async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}