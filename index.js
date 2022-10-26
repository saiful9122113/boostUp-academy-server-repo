const express=require('express')
const app=express();
const port=process.env.PORT || 5000;
const cors = require('cors');

const courses=require('./data/courses.json');

app.use(cors());

app.get("/", async (req, res) => {
    return res.status(200).send(`<h1>Express server</h1>`)
})

app.get('/courses', async (req, res)=>{
    return res.status(200).json(courses);
});

app.get('/course/:id', async (req, res)=>{
    const course = courses.find(c => c.id === req.params.id)
    if(course){
        return res.status(200).json(course);
    }

    return res.status(404).json({message: "course not found!"})
})

app.listen(port, ()=>{
    console.log('Server running on the port',port);
})