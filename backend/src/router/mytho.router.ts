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
router.get("/", (req, res) => {
    res.send(mythoBooks);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const mythologydata =mythoBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(mythologydata);
})

router.get("/:mythbookId", (req, res) => {
    const mythbookId = req.params.mythbookId;
    const mythbook =mythoBooks.find(mythbook => mythbook.id == mythbookId);
    res.send(mythbook);
})

export default router;