import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { users } from '../childdata';
import { UserModel, user } from '../models/user.model';
import expressAsyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/httpstatus';
import bcrypt from 'bcryptjs';
const router = Router(); 


router.get("/seed", expressAsyncHandler(async (req,res)=>{
    const usercount=await UserModel.countDocuments();
    if(usercount>0){
        res.send("Seed is already done!");
        return;
    }else{
        await UserModel.create(users);
        res.send("Seed is done!");
    }
    res.send(users);
}
));
router.post("/login",expressAsyncHandler(async(req, res) => {
    const {email,password}=req.body;
    const user=await UserModel.findOne({email,password});

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        const BAD_REQUEST=400;
        res.send(BAD_REQUEST).send("User name or passwrod is not valid!");
    }
})
)

router.post('/register', expressAsyncHandler(
    async (req, res) => {
      const {name, email, password, address} = req.body;
      const user = await UserModel.findOne({email});
      if(user){
        res.status(HTTP_BAD_REQUEST)
        .send('User is already exist, please login!');
        return;
      }
  
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      const newUser:user = {
        id:'',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
      }
  
      const dbUser = await UserModel.create(newUser);
      res.send(generateTokenResponse(dbUser));
    }
  ))

const generateTokenResponse = (user: any)=>{
    const token=jwt.sign({
        id:user.id,email:user.email,isAdmin:user.isAdmin
    },"some text here",{
        expiresIn: "30d"
    });
    return user;
}

export default router;