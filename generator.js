const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Welcome to the Band name Generator.");

  rl.question("What's the name of the city you grew up in?\n", function (city) {
    rl.question("What's the name of your pet?\n", function (petName) {
      console.log(`Your band name could be ${city} ${petName} `);
      rl.close();
    });
  });



rl.on('close', function () {
    process.exit(0);
  });