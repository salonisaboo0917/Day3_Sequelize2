const { router } = require("./routes/route");

 const express=requir('express');
 const app=express();
 app.use(express.json());
 app.use('/',router)
 UserModel.sync({force:false});
 app.listen(4000,async()=>{
    console.log('Server is listening at port:4001')
    await dbConnection()
 })