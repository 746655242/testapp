/* 

邮件发送
host  网址
port  端口
user  发送邮箱
pass  发送授权码
toemail 收信邮箱
html    内容
title   标题 

*/
var mailer        = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
module.exports=function(item,toemail,title,html,cb){

    //console.log(item,toemail,title,html,cb);
    item={
        host:'smtp.qq.com',
        potr:465,
        account:'315681654@qq.com',
        pws:'suxewfpjlafdcaec',
        name:'醉里',
    }
    let host=item.host;
    let port=item.potr;
    let user=item.account;
    let pass=item.pws;
    let name=item.name||user;


	var transport = mailer.createTransport(smtpTransport({
		host: host,
		port: parseInt(port),
		auth: {
			user: user,
			pass: pass
		}
    }));
    
    transport.sendMail({
        from : name+"  <"+user+">",
        to : toemail,
        subject: title,
        generateTextFromHTML : true,
        html : html,
    }, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.accepted);

           
        }
        cb(error,response,user);
        transport.close();
    });
}