const jwt = require("jsonwebtoken");

const value = {
    name : "shatadal",
    accountNUmber : 123123123

}

const token = jwt.sign(value,"secret");
console.log(token);

const contents = {
    name : "shatadal",
    accNumber : 1234567890,
    iat :  987654321,
};

const newToken = (jwt.sign(contents,"wawdsafsf"));
console.log(newToken);