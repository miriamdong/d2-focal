const num = process.argv.slice(2);
const diceRoller = function() {
  let dice = '';
  for (let i = 0; i < num; i++) {
    const roll = (Math.floor(Math.random() * 6) + 1);
    dice += i < num - 1 ? roll + ', ' : i === num - 1 ? roll : '';
  }
  console.log(`Rolled ${ num } dice: ${ dice }`);
};
diceRoller();