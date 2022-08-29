const toggle=document.querySelector('.toggle');
const hourEl =document.querySelector('.hour');
const minuteEl =document.querySelector('.minute');
const secondEl =document.querySelector('.second');
const timeEl =document.querySelector('.time');
const dateEl =document.querySelector('.date');
const coldate =document.querySelector('span');

const days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

toggle.addEventListener('click',(e)=>{
    const html =document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Dark Mode'
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML='Light Mode'
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day=time.getDay();
    const hours = time.getHours();
    const minutes =time.getMinutes();
    const seconds =time.getSeconds();
    const HourClock = hours % 12;
    const ampm = hours>=12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(HourClock,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML=`${HourClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML=`${days[day]}, ${months[month]} ${date}`;

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
}

setTime();

setInterval(setTime,1000)