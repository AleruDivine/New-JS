// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13];

const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }

  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcAmplitude([3, -2, -6, -1, 'error', 9, 13]);
console.log(amplitude);

//coding challenge 

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
  let str = '';
  for (let i = 0; i < arr.length; i++){
str = str + `${arr[i]}c in ${i + 1} days ... `;
  }
  console.log('...' + str);
}
printForecast(data1)