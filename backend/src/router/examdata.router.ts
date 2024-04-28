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
router.get("/",expressAsyncHandler(async (req, res) => {
    const examBooks = await examModel.find();
    res.send(examBooks);
})
)

router.get("/search/:searchTerm",expressAsyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const exambookdata=await examModel.find({title:{$regex:searchRegex}})
    res.send(exambookdata);
}))

router.get("/:exambookId",expressAsyncHandler(async(req, res) => {
    const exambookId=await examModel.findById(req.params.exambookId);
    res.send(exambookId);
}))

export default router;