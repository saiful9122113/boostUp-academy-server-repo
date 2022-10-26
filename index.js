const express=require('express')
consst app=express();
const port=process.env.PORT || 5000;


const courses=require('./data/courses.json');

app.get('/', (req, res)=>{
    res.send('News API Running');
});

app.get('/course-name', (req, res)=>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('Server running on the port',port);
})