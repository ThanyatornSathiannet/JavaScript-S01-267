let num1 = '150';
let flo1 = '1.50';

console.log("*** Converting String to integer ***");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

console.log("*** Converting string to Float ***");
console.log(parseFloat('1.25abc'));
console.log(flo1);
console.log('ABC');

console.log("*** More Conversion Example ***");
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

console.log(parseInt(`${1 + 1}`));