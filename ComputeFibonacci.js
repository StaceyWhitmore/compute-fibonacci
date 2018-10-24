const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fib = index =>
    (index == 0) ?
         0 :
      (index == 1) ?
          1 :
       sum  =  fib(index - 1) + fib(index - 2)

       rl.question('enter and index (int) to start fibonacci ',
         (input) => {
           console.log(fib(input))
           rl.close()
         })
