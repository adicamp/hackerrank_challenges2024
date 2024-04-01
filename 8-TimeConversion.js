// Barbar
function timeConversion(s) {
  s = s.split(":");

  if (s[2].slice(-2) == "PM") {
    s[2] = s[2].replace("PM", "");
    parseInt(s[0]) < 12 ? (s[0] = parseInt(s[0]) + 12) : null;
  } else {
    s[2] = s[2].replace("AM", "");
    parseInt(s[0]) == 12 ? (s[0] = "00") : null;
  }
  return s.join(":");
}

// Inpired by Forum
function timeConversion(s) {
  let [hour, minute, sec_mer] = s.split(":");
  let [second, meridiem] = sec_mer.split(/(?=[AP]M)/);
  let hour24 = null;
  if (meridiem === "PM" && parseInt(hour) < 12) hour24 = parseInt(hour) + 12;
  else if (meridiem === "AM" && parseInt(hour) == 12) hour24 = "00";
  return `${hour24 || hour}:${minute}:${second}`;
}

let s = "07:05:45PM";

console.log(timeConversion(s));
