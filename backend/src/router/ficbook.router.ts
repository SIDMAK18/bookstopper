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
router.get("/", (req, res) => {
    res.send(ficBooks);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const ficdata =ficBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(ficdata);
})

router.get("/:ficbookId", (req, res) => {
    const ficbookId = req.params.ficbookId;
    const ficbook =ficBooks.find(ficbook => ficbook.id == ficbookId);
    res.send(ficbook);
})

export default router;