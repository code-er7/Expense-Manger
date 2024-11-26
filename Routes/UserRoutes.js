import express from 'express';
import { authUser, registerUser } from '../Controller/UserDataController.js';
const router = express.Router();



// JSON.stringify(obj) this returns a json data format , converts JS obj into json 
router.post('/register' , registerUser);
router.post('/login' , authUser);

export default router ;