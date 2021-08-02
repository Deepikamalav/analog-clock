const deg =6;
const hour =document.querrySelctor('hour');
const minute =document.querrySelctor('minute');
const second =document.querrySelctor('second');




SetInterval ( () => { 




let day  = new Date();
let hour = day.getHours ()*30;
let minute = day.getMinutes ()*deg;
let second = day.getSeconds ()*deg ;


hour.style.transform ='rotateZ(${hour+minute/12}deg)';
minute.style.transform ='rotateZ(${minute}deg)';
second.style.transform ='rotateZ(${second}deg)';

 } )
