import { Router } from "express";
import { mythoBooks } from "../mythologydata";
import expressAsyncHandler from "express-async-handler";
import { mythModel } from "../models/mythdata.model";

const router= Router();


router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const mythcount=await mythModel.countDocuments();
    if(mythcount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await mythModel.create(mythoBooks);
        res.send("Seed is done!");
    }
    res.send(mythoBooks);
}
));
router.get("/",expressAsyncHandler(async (req, res) => {
    const mythBooks = await mythModel.find();
    res.send(mythBooks);
})
)

router.get("/search/:searchTerm",expressAsyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const mythbookdata=await mythModel.find({title:{$regex:searchRegex}})
    res.send(mythbookdata);
}))

router.get("/:mythbookId", expressAsyncHandler(async (req, res) => {
    const mythbookId=await mythModel.findById(req.params.mythbookId);
    res.send(mythbookId);
}))

export default router;