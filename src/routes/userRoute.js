import express from 'express';
import {studentLogin,adminLogin,updateBalance,updateQuotas, getBalance} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/studentlogin',studentLogin)
userRouter.post('/adminlogin',adminLogin)
userRouter.post('/updatebalance',updateBalance)
userRouter.post('/updatequotas',updateQuotas)
userRouter.get('/getBalance',getBalance)

export default userRouter;