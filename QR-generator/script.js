let qrcode=document.querySelector("img");
let qrtext=document.querySelector("textarea");
let qrbtn=document.querySelector("button");
qrbtn.addEventListener("click",generateqr);
function generateqr()
{
    
let size="1000x1000";
let data=qrtext.value;
let baseURL="http://api.qrserver.com/v1/create-qr-code/";
let url=(baseURL+"?data="+data+"&size="+size);
qrcode.src=url;
}
