const express=require('express');
const app=express();
const connection=require('./src/config/dbconection');               
const routes=require('./src/routes/adminroutes');
connection();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello,World');
})

app.use('/auth',routes);
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running with ${port}`);
})