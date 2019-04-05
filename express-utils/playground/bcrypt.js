const bcrypt = require('bcrypt');
 
const pass1 = 'yalasabes';
const pass2 = 'nolasabes';
 
bcrypt.genSalt(10).then(salt => {
    console.log(salt);
 
    bcrypt.hash(pass1, salt).then(hash => {
        console.log(hash);
 
        bcrypt.compare(pass2, hash).then(result => {
            console.log(result)
        })
    })
});
