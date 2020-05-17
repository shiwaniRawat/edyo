

//Q1
function countWords(str) {
  
   return str.split(' ').length;
   }
console.log(countWords("Good, better, best. Never let it rest. Till your good is better and your better is best"));


//Q2
function new1(str)
 {
  if (str.length>=3)
   {
   str_len = 3;
 
  back = str.substring(str.length-3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(new1("abc"));
console.log(new1("abcd"));



//Q3
function look(str, char)
 {
  ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if (str.charAt(i) == char) {
      ctr++;
    }
  }
  return (ctr <= 4 && ctr >= 2);
}


console.log(look("JavaScript", "a"));
console.log(look("Console", "o"));

//Q4
function changesring(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);  
  return front_part + back_part;
}
console.log(changesring("Python"));

console.log(changesring("JAVAScript"));


//Q5
function arry_div(arr) {
  var result = [0, 0];
  for(var i = 0; i < arr.length; i++) 
  {
    if(i % 2) 
      result[1] += arr[i];
    else
      result[0] += arr[i];
  }
  return result
}

console.log(arry_div([1, 3, 6, 2, 5, 10]))

//Q6
function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))

//Q7

function sums(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    for (var j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }
  }
  return new_arr;
}

console.log(sums([1, 2, 3, 4, 5]));

console.log(sums([1, 2, -3, 4, 5]));

//Q8

    var obj = {

      user1: {

        age: 22,

        place: 'New York'

      },

      user2: {

        age: 15,

        place: 'Washington'

      },


    calcAvAge: function() {

        var sum = 0, amount = 0;

        for (var key in this) {

          if (this[key].age) {

            sum += this[key].age;

            amount++;

          }

        }

        return parseInt(sum / amount);  

    }

    }



    console.log(obj.calcAvAge())


    //Q9
    var a = { blah: 1 };
var b = { blah: 1 };
var c = a;
var d = { blah: 2 };

Object.compare = function (obj1, obj2) {
  //Loop through properties in object 1
  for (var p in obj1) {
    //Check property exists on both objects
    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
 
    switch (typeof (obj1[p])) {
      //Deep compare objects
      case 'object':
        if (!Object.compare(obj1[p], obj2[p])) return false;
        break;
      //Compare function code
      case 'function':
        if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
        break;
      //Compare values
      default:
        if (obj1[p] != obj2[p]) return false;
    }
  }
 
  //Check object 2 for any extra properties
  for (var p in obj2) {
    if (typeof (obj1[p]) == 'undefined') return false;
  }
  return true;
};

console.log(Object.compare(a, b));  
console.log(Object.compare(a, c));  
console.log(Object.compare(a, d));



//Q10
function frequency(arr) {

      var ar = {};

      for (var i = 0; i < arr.length; i++) {

        if (ar[arr[i]]) ar[arr[i]] += 1;

        else ar[arr[i]] = 1;

      }

      return ar

    }



