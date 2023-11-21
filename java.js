// const countdownDate = new Date('11 apr 2024 00:00:00').getTime();

// const x = setInterval(function() {

//   const now = new Date().getTime();
    
//   const distance = countdownDate - now;
    
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
//   document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
//   document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
//   document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
    
//   if (distance < 0) {
//     clearInterval(x);
//   }
// }, 1000);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears = "11 apr 2024";

function countdown(){
    const newYearsDate =  new Date(newYears);
    const currentDate = new Date();
    
    const totalseconds = (newYearsDate - currentDate) /1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds/ 3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);  
}
function formatTime(time){
    return time < 10 ? `0${time}` :time;
}
// intail call
countdown();

setInterval(countdown, 1000);
// test BIM

function National_institutes_of_Healthy(weigth, height){
    var BMI= weigth / height**2 ;
    if(BMI < 18.5)  {
        console.log("your weight is ",BMI,"you are less than 18.5.","it's mean you are underweight.");
    }
    else if(BMI >= 18.5 && BMI <= 24.9) {
        console.log("your weight is ",BMI,"It's mean you are ideal.");
    }
    else if( BMI >=25 && BMI <= 29.9){
        console.log("your weight is",BMI,"It's mean you are overweight.");
    }
    else{
        console.log("your weight is",BMI,"It's mean you are obesity");
    }
  }
 National_institutes_of_Healthy(51, 1.69);