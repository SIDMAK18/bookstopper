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
router.get("",expressAsyncHandler(async (req, res) => {
    const childBooks = await childModel.find();
    res.send(childBooks);
})
)

router.get("/search/:searchTerm",expressAsyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const childbookdata=await childModel.find({title:{$regex:searchRegex}})
    res.send(childbookdata);
}))

router.get("/:childbookId",expressAsyncHandler(async(req, res) => {
    const childbookId=await childModel.findById(req.params.childbookId);
    res.send(childbookId);
}))

export default router;