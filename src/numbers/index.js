const isEven = (num) => {
  // write code for numbers.isEven
if (num % 2 === 0) {
  return true;
  } else if(num2 % 3 === 1){
    return false;
  }
}
const sum = (arr) => {
  // write code for numbers.sum
return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}
function sum(arr){
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
let thisSum = sumIT(arr)
console.log(thisSum === num) {
return true
  } else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}