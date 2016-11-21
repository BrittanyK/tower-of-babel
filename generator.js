
  let FizzBuzz = function *() {
      let num = 1;

       while( num <= process.argv[2]) {

       if(num % 15 === 0){
           num++;
           yield "FizzBuzz";
       } else if(num % 3 === 0){
           num++;
             yield "Fizz";
         } else if(num % 5 === 0){
             num++;
               yield "Buzz";
        } else {
            yield num++
    }
}
}();


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
