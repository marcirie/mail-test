const tableau = ['marcirie23gmail.com', 'marcirie23@gmailcom', 'marcirie23@gmail.com', 'marcirie23@gmail.com', 'marcirie23@gmail.com']

const validator = require('validator')
for (let item = 0; item < tableau.length; item++) {
    const element = tableau[item];
    
    let isEmail = validator.isEmail(element)

    if ( isEmail = validator.isEmail(element)) {
        console.log(element, ': ok');
    } else {
        console.log(element, ": no");
    }

}