const today = new Date();

const day = today.getDay();
const dayList = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//printing the day today
console.log(`Today is : ${dayList[day]}`)

//Next we work on the current time
/**
 * Since we shall be reassigning the hour and suffix(am, or pm)
 * We use `let` to declares these variables
 */

let hour = today.getHours()
let suffix = (hour <= 12) ? " AM" : " PM";
const minutes = today.getMinutes();
const seconds = today.getSeconds();

hour = (hour <= 12) ? hour : (hour + 12);

//Suffixning day time
if (hour === 0 && suffix === " PM") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    suffix = " Noon";
  } else {
    hour = 12;
    suffix = " PM";
  }
}

//suffixng night time
if (hour === 12 && suffix === " AM ") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    suffix = " Midnight";
  } else {
    hour = 12;
    suffix = " AM";
  }
}

if (hour < 10) {
  hour = "0" + hour;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

if (seconds < 10) {
  seconds = "0" + seconds;
}


console.log(`The Time Now is : ${hour}${suffix} : ${minutes} : ${seconds}`)
