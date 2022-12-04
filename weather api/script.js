let button=document.querySelector('.butt');
let place=document.querySelector('.inputValue');
let tempr=document.querySelector('#dig');
let win=document.querySelector('#val');
let win2=document.querySelector('#value3');
let humi=document.querySelector('#value1');
let cloud=document.querySelector('#value2');
button.addEventListener('click',function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+place.value+'&appid=ba2af7b8835943b80dc3d67ccb6fc32b')
.then(response => response.json())
.then(data => {
    let tempvalue=data['main']['temp'];
    let windvalue=data['wind']['speed'];
let cloudrange=data['clouds']['all'];
let humidity=data['main']['humidity'];
    tempr.innerHTML=tempvalue;
    val.innerHTML=windvalue;
    value3.innerHTML=windvalue;
    humi.innerHTML=humidity;
    cloud.innerHTML=cloudrange;


})
.catch(err=> alert("wrong city name"))
})