 import express from 'express' ;
import protect from '../Middlewares/authHandler';
 const router = express.Router() ;


 router.get("/alldata" , protect ,getAllData);
 router.post("/add", protect , addItem );
 router.delete("/delete" , protect , deleteItem);
 router.patch("/update" , protect , updataeItem);
