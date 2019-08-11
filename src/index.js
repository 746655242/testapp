const express =require('express');
const path=require("path");
const app=express();

require('./database');

const exphbs=require("express-handlebars");
const methodOverride=require('method-override');
const session=require('express-session');

app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
}));

app.set('view engine','.hbs');


app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));


app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


app.listen(app.get('port'),()=>{
    console.log('启动端口',app.get('port'));
});