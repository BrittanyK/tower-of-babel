
  let FizzBuzz = {
    [Symbol.iterator]() {
       let num = 1;

       return{
           next(){
       if(num > process.argv[2])
         return {done: true};

       let value = num;

       if (num % 15 === 0)
           value = "FizzBuzz";
       else if(num % 3 === 0)
              value = "Fizz";
       else if(num % 5 === 0)
               value = "Buzz";

         ++num;

          return {done: false, value: value};
        }
     };
   }
 };

 for (var n of FizzBuzz) {
   console.log(n);
 // 1
 // 2
 // Fizz
 // 4
 // Buzz
 // Fizz
 // 7
 // 8
 // Fizz
 // Buzz
 // 11
 // Fizz
 // 13
 // 14
 // FizzBuzz
 // 16
 // 17
 // Fizz
 // 19
 // Buzz
 // Fizz
 // 22
 // 23
 // Fizz
 // Buzz
 // 26
 // Fizz
 // 28
 // 29
 // FizzBuzz
 // ...
 }
