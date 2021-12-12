

function countDown(){
    document.getElementById('months').innerHTML=11 - new Date().getMonth();
document.getElementById('days').innerHTML=30 - new Date().getDate();
document.getElementById('hours').innerHTML=24- new Date().getHours();
document.getElementById('minutes').innerHTML=60 - new Date().getMinutes();
document.getElementById('seconds').innerHTML=60- new Date().getSeconds();

}

setInterval(countDown,10);