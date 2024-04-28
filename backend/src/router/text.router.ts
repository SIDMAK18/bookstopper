import { Router } from "express";
import { textBooks } from "../textbook";
import { TextModel } from "../models/textdata.model";
import expressAsyncHandler from "express-async-handler";
const router= Router();

router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const textcount=await TextModel.countDocuments();
    if(textcount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await TextModel.create(textBooks);
        res.send("Seed is done!");
    }
    res.send(textBooks);
}
));

router.get("",expressAsyncHandler(async (req, res) => {
    const textBooks = await TextModel.find();
    res.send(textBooks);
})
)


router.get("/search/:searchTerm",expressAsyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const textbookdata=await TextModel.find({title:{$regex:searchRegex}})
    res.send(textbookdata);
}))


router.get("/:textbookId",expressAsyncHandler(async(req, res) => {
    const textbookId=await TextModel.findById(req.params.textbookId);
    res.send(textbookId);
}))

export default router;