const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

let tempsBigOreq = temperatures.filter((temperatures) => {
  if (temperatures >= 25) {
    return true;
  } else {
    return false;
  }
});
console.log("temps greater or equal than 25", tempsBigOreq);

let tempsless20 = temperatures.filter((temperatures) => {
  if (temperatures < 20) {
    return true;
  } else {
    return false;
  }
});
console.log(tempsles20);

/*part two temp transformation*/

let convertedTemps = temperatures.filter((temperatures) => {
  const convertedTemps = (Celsius * 9) / 5 + 32;
});
console.log(convertedTemps);

const temperatureLabels = temperatures.map((temp) => {
  if (temp >= 25) {
    return "Warm";
  } else if (temp >= 20 && temp < 25) {
    return "Mild";
  } else {
    return "Cool";
  }
});

console.log(temperatureLabels);

/* Array statistics first Highest temps of the month, and the lowest temps on the month*/

const HighestighTemp = math.max(...temperatures);
const lowesttemp = math.max(...temperatures);
console.log(HighestighTemp);
console.log(lowesttemp);
