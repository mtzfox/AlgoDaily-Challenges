/*
Outlined in [AlgoDaily](https://algodaily.com/challenge_slides/sum-all-primes)

You're given a number n. Can you write a method sumOfAllPrimes that finds all prime numbers smaller than or equal to n, and returns a sum of them?

*/

function sumOfPrimes(n) {
    let total = 0;
    if (n == 2) return 2;
    
      const isPrimeNumber = function(num) {
          let boundary = Math.floor(Math.sqrt(num));
          for (let i = 2; i <= boundary; i++) {
              if (num%i === 0) return false;
      }
          return num >= 2;
      }
    
    for (let i = n-1; i >= 0; --i) {
        if (isPrimeNumber(i)) total += i;
    }
    
    return total;
  }
  
  sumOfPrimes(30) // 129