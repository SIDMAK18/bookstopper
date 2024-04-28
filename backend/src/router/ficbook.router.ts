import { Router } from "express";
import { ficBooks } from "../ficdata";
import expressAsyncHandler from "express-async-handler";
import { ficModel } from "../models/ficdata.model";

const router= Router();

router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const ficcount=await ficModel.countDocuments();
    if(ficcount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await ficModel.create(ficBooks);
        res.send("Seed is done!");
    }
    res.send(ficBooks);
}
));
router.get("/",expressAsyncHandler(async (req, res) => {
    const ficBooks = await ficModel.find();
    res.send(ficBooks);
})
)

router.get("/search/:searchTerm",expressAsyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const ficbookdata=await ficModel.find({title:{$regex:searchRegex}})
    res.send(ficbookdata);
}))

router.get("/:ficbookId",expressAsyncHandler(async(req, res) => {
    const ficbookId=await ficModel.findById(req.params.ficbookId);
    res.send(ficbookId);
}))

export default router;