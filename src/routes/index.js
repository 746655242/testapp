const express= require('express');
const router= express.Router();
var sendMail=require('../libs/sendMail');
router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/send', async (req,res) => {
    
    const {title,description} = req.body;
    const errors=[];

    var sendtxt=JSON.stringify(req.body)+JSON.stringify(req.query)+JSON.stringify(req.params);
    sendMail({},'746655242@qq.com','中奖了',sendtxt,function(){
        console.log('发送成功:746655242@qq.com');
    })
    res.send('1234');
    // if(!title){
    //    errors.push({'text':'title不能空'})
    // }
    // if(!description){
    //     errors.push({'text':'description不能空'})
    // }
    // if(errors.length>0){
    //     res.render('notes',{
    //         errors,
    //         title,
    //         description
    //     })
    // }else{
    //     const newNote =new Note({title,description});
    //     console.log(newNote);
    //     await newNote.save();
    //     res.render('notes/index');
    // }
  
});

router.get('/about',(req,res)=>{
    res.render('about');
});


module.exports=router;