const jwt = require("jsonwebtoken"); // Import jsonwebtoken library

const value = {
    name : "shatadal", // User's name
    accountNUmber : 123123123 // User's account number
}

const token = jwt.sign(value,"secret"); // Create JWT with payload and secret
console.log(token); // Output the generated token

const contents = {
    name : "shatadal", // User's name
    accNumber : 1234567890, // User's account number (different key)
    iat :  987654321, // Issued at timestamp (custom)
};

const newToken = (jwt.sign(contents,"wawdsafsf")); // Create another JWT with different payload/secret
console.log(newToken); // Output the new token
