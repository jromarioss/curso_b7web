import validator from 'validator';

const email: string = 'jromario@email.com';
const ip: string = '192.168.0.1';

console.log(validator.isEmail(email));
console.log(validator.isIP(ip));