const express=require('express')
consst app=express();
const port=process.env.PORT ||5000;

app.get('/', (req, res)=>{
    res.send('News API Running');
});

app.listen(port, ()=>{
    console.log('Server running on the port',port);
})