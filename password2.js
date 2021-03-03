const input = process.argv.slice(2);
const obfuscate = function() {
  let result = '';
  result = input.toString().split('a').join('4');
  result = result.toString().split('e').join('3');
  result = result.toString().split('o').join('0');
  result = result.toString().split('l').join('1');
  return result;
};

console.log(obfuscate());



// ('a', '4')
//   ('e', '3')
//   ('o', '0')
//   ('l', '1')