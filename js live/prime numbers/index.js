// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1.iterate numbers from to num => i
// 2.iterate from 2 to i
// 3.если остаток от деления i на number равно 0 - то не простое

// chek 1-9
// 2 -> true
// 3 (3/2; 3/3) -> true
// 4 (4 / 2 (!); 4 / 3, 4 / 4) -> false

// input:number 
// output: boolean
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    // console.log('INNER NUMBER ' + number);

     if ( number % index === 0) {
     // console.log('NUMBER ' + i + ' IS NOT PRIME');  
       return false;
     }
   }

   return true;
   }



// input:number 
// output: undefined

function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    // console.log('CHEKING NUMBER ' + i);

    if (isPrime(i)) {
      console.log(i);
    }

    
  }
}

// test

getPrimes(15)


  