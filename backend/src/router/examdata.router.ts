import{Router} from 'express';
import { examBooks } from '../exambookdata';
import expressAsyncHandler from 'express-async-handler';
import { examModel } from '../models/examdata.model';

const router = Router();

router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const examcount=await examModel.countDocuments();
    if(examcount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await examModel.create(examBooks);
        res.send("Seed is done!");
    }
    res.send(examBooks);
}
));
router.get("/", (req, res) => {
    res.send(examBooks);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const exambookdata =examBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(exambookdata);
})

router.get("/:exambookId", (req, res) => {
    const exambookId = req.params.exambookId;
    const exambook =examBooks.find(exambook => exambook.id == exambookId);
    res.send(exambook);
})

export default router;