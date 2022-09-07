
const inp =document.getElementById('in');
const city=document.getElementById('place');
const number1=28;
const number2=20;
const number3=33;
const mod="sunny";
const mod1="rainy";
const mod2="cloudy";



function myfunc(c) {
    if (c=='kerala') {
        inp.value=c;
        document.getElementById('place').innerHTML=c;
        document.getElementById('num').innerHTML=number1;
        document.getElementById('mode').innerHTML=mod;

    }
    if (c=='california') {
        inp.value=c;
        document.getElementById('place').innerHTML=c;
        document.getElementById('num').innerHTML=number2;
        document.getElementById('mode').innerHTML=mod1;


    }
    if (c=='Newyork') {
        inp.value=c;
        document.getElementById('place').innerHTML=c;
        document.getElementById('num').innerHTML=number3;
        document.getElementById('mode').innerHTML=mod2;


    }
}