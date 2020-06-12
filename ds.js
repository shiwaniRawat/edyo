// Q1

var array=[1,2,3,4,5,7,8];
function find(array){
	let sum=0;
	for(let x in array){
		sum+=array[x];
	}
	let n=array.length+1;
	ex_sum=Math.floor((n*(n+1))/2);
	return ex_sum;
}
find(array);

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
function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 2, 1,4,4];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);