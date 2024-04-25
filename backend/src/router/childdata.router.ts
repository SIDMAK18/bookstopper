import{Router} from 'express';
import { childBooks } from '../childdata';
import expressAsyncHandler from 'express-async-handler';
import { childModel } from '../models/childdata.model';
const router = Router();

router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const childcount=await childModel.countDocuments();
    if(childcount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await childModel.create(childBooks);
        res.send("Seed is done!");
    }
    res.send(childBooks);
}
));
router.get("/", (req, res) => {
    res.send(childBooks);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const childdata =childBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(childdata);
})

router.get("/:childbookId", (req, res) => {
    const childbookId = req.params.childbookId;
    const childbook =childBooks.find(childbook => childbook.id == childbookId);
    res.send(childbook);
})

export default router;