import express from "express";
import cors from "cors";
// import userRoutes from './Routes/UserRoutes.js'

const app = express();
const PORT = 8000;

//middlewares
app.use(express.json());
app.use(cors());

//understood the use of next keyword
// app.use((req , res , next)=>{

//     console.log("hello my name is chetan raoo");
//     const error = new Error("Something went wrong");
//     next(error);
// })

app.get("/", (req, res) => {
  res.send("hello world");
});
// app.use('/app/v1.1/user' , userRoutes);




//error handling middleware
//if i made a middleware and send the error in it's next function than it will skip all the middlewares in b/w and directly send the req to
//this middleware which is error handling middlware 
// app.use((err, req, res, next) => {
//   console.log("Error:", err.message);
//   res.status(500).send("Internal Server Error");
// });

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});
