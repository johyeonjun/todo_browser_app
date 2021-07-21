 const clock = document.querySelector("h2#clock")
 function getClock(){
     const date = new Date();
     const hour = String(date.getHours()).padStart(2,"0");
     const minutes = String(date.getMinutes()).padStart(2,"0");
    //  const second = String(date.getSeconds()).padStart(2,"0");
    //  clock.innerText = `${hour}:${minutes}:${second}`;
    clock.innerText = `${hour}:${minutes}`;
 }

 // .padStart(2,"0") => 두개 자리가 안되면, 앞에 0을 붙이는 함수 (padEnd: 뒤에 0을 붙임)

 getClock();
 setInterval(getClock, 1000);