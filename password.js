/* eslint-disable indent */
const input = process.argv.slice(2);

const obfuscate = function() {
  let output = input.toString().split('');
  for (let i = 0; i < output.length; i++) {
    switch (output[i]) {
      case 'a':
        output[i] = '4';
        break;
      case 'e':
        output[i] = '3';
        break;
      case 'o':
        output[i] = '0';
        break;
      case 'l':
        output[i] = '1';
        break;
    }
  }
  console.log(output.join(''));
};

obfuscate();

// console.log(obfuscate('password'), 'p4ssw0rd');
// console.log(obfuscate('abracadabra'), '4br4c4d4br4');
// console.log(obfuscate('audaciously'), '4ud4ci0us1y');