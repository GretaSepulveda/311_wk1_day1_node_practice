//isEven
const isEven = (num) => {
  if(num % 2 === 0) {
    console.log("Even number is: ", num)
    return true
  }
}

//Sum
const sum = (arr) => {
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}

//comboSum
function sumOf(arr){
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}

const comboSum = (arr, num) => {
  let newSum = sumOf(arr)
  if(newSum === num) {
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