// Q1
function missingNumber(array) {
  const n = array.length + 1;
  const sequenceSum = n * (n + 1) / 2;
  const sum = array.reduce((accum, current) => {
    accum += current;
    return accum;
  }, 0)
  return sequenceSum - sum;
}

console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10]));

// Q2
function cumulativeSum(a) {
    var result = [a[0]];
    var last = a[0];
    for (i = 1; i < a.length; i++) {
        last = last + a[i];
        result.push(last)
    }
    return result;
}
console.log(cumulativeSum([1, 3, 5, 7]));
// Q3
function unique_array(a){
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        if (arr.indexOf(a[i]) === -1) {
            arr.push(a[i]);
        }
    }
  return arr;
}
var a = [1,1,2,3,4,5,4,5,6,6,7,8,8,9];
var a=unique_array(a);
console.log(a);