/*const tableau = ['marcirie23gmail.com', 'marcirie23@gmailcom', 'marcirie23@gmail.com',
    'marcirie23@gmail.com', 'marcirie23@gmail.com']*/

console.log(process.argv);
    const tableau = process.argv[2].split(',')

const validator = require('validator')

for (let item = 0; item < tableau.length; item++) {
    const element = tableau[item];
    
    let isEmail = validator.isEmail(element)

    if ( validator.isEmail(element)) {
        console.log(element, ': ok');
    } else {
        console.log(element, ": no");
    }

}