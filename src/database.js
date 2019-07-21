const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testapp',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
 .then(db=> console.log('启动mong'))
 .catch(err=>console.log(err));