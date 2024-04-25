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
router.get("/", (req, res) => {
    res.send(editBooks);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const editordata =editBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(editordata);
})

router.get("/:editbookId", (req, res) => {
    const editbookId = req.params.editbookId;
    const editbook =editBooks.find(editbook => editbook.id == editbookId);
    res.send(editbook);
})

export default router;