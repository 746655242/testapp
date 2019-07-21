const express= require('express');
const router= express.Router();
const Note=require("../models/Note");

router.get('/notes',(req,res) => {
    res.render('notes/index');
});

router.post('/notes/add', async (req,res) => {
    
    const {title,description} = req.body;
    const errors=[];
    if(!title){
       errors.push({'text':'title不能空'})
    }
    if(!description){
        errors.push({'text':'description不能空'})
    }
    if(errors.length>0){
        res.render('notes',{
            errors,
            title,
            description
        })
    }else{
        const newNote =new Note({title,description});
        console.log(newNote);
        await newNote.save();
        res.render('notes/index');
    }
  
});




module.exports=router;