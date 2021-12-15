// Question 1

for(i=0; i<=20; i++){
   
    if(i % 2 != 0){
      console.log("odd number" + i);
    }
  }


// Question 2

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(titleCase("Guvi Geek"));

// Question 3

function sum(arr){
   var a = 0;
   for(var i=0; i<arr.length; i++){
     a = a + arr[i];

   }
   console.log(a);
}

sum([1,2,3,4,5]);

// Question 4


var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

// Question 5


const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

// Question 6

function RightRotate(a, n, k)
{
 
  
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
           
          console.log(a[n + i - k] + " ");
        }
        else {
 
           
          console.log((a[i - k]) + " ");
        }
    }
   
}
 
// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
 
RightRotate(Array, N, K);
