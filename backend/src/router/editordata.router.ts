import { Router } from "express";
import { editBooks } from "../editordata";
import expressAsyncHandler from "express-async-handler";
import { editModel } from "../models/editdata.model";

const router= Router();

router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const editcount=await editModel.countDocuments();
    if(editcount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await editModel.create(editBooks);
        res.send("Seed is done!");
    }
    res.send(editBooks);
}
));
router.get("/",expressAsyncHandler(async (req, res) => {
    const editBooks = await editModel.find();
    res.send(editBooks);
})
)

router.get("/search/:searchTerm",expressAsyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const editbookdata=await editModel.find({title:{$regex:searchRegex}})
    res.send(editbookdata);
}))

router.get("/:editbookId",expressAsyncHandler(async(req, res) => {
    const editbookId=await editModel.findById(req.params.editbookId);
    res.send(editbookId);
}))

export default router;