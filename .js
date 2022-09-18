let daysnames =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"];

let monthsnames =["January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November","December"];

let d = new Date();

let dayname = daysnames[d.getDay()];
let monthname = monthsnames[d.getMonth()];
let year = d.getFullYear();

let fulldate = dayname + "," + monthname + "" + d.getDate() + "," + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;