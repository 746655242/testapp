const express =require('express');
const https=require("https");
const http=require("https");
const path=require("path");
const app=express();

// require('./database');

var fs=require("fs");

//同步读取密钥和签名证书
 var options = {
  key:fs.readFileSync('./key/tao.caipiaodog.com_key.key'),
  cert:fs.readFileSync('./key/tao.caipiaodog.com_chain.crt')
}

var httpsServer = https.createServer(options,app);
var httpServer = http.createServer(app); 

const exphbs=require("express-handlebars");
const methodOverride=require('method-override');
const session=require('express-session');

app.set('port',process.env.PORT||80);
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



//httpServer.listen(80);
httpsServer.listen(443);

app.listen(app.get('port'),()=>{
    console.log('启动端口',app.get('port'));
});