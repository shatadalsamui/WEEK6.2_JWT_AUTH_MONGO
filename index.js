const express = require("express"); // Import the Express framework
const jwt = require("jsonwebtoken"); // Import the JSON Web Token library for authentication

const JWT_SECRET = "kirat123123"; // Secret key used to sign and verify JWTs

const app = express(); // Create an instance of the Express application
app.use(express.json()); // Middleware to parse incoming JSON requests

const users = []; // In-memory array to store user data (username and password)

// Custom middleware to log the type of request (e.g., GET, POST)
function logger(req, res, next) {
    console.log(req.method + " request came"); // Log the request method
    next(); // Pass control to the next middleware or route handler
}

// Serve static files (e.g., HTML, CSS, JS) from the "public" directory
app.use(express.static("public"));

// Route to handle user signup
app.post("/signup", logger, function (req, res) {
    const { username, password } = req.body; // Extract username and password from the request body

    // Check if the user already exists in the `users` array
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.json({ message: "Username already exists" }); // Return error if user exists
    }

    users.push({ username, password }); // Add the new user to the `users` array

    res.json({ message: "You are signed up" }); // Return success message
});

// Route to handle user signin
app.post("/signin", logger, function (req, res) {
    const { username, password } = req.body; // Extract username and password from the request body

    // Find the user in the `users` array with matching credentials
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (!foundUser) {
        return res.json({ message: "Credentials incorrect" }); // Return error if credentials are invalid
    }

    // Generate a JWT token with the user's username as the payload
    const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);

    res.json({ token }); // Return the generated token
});

// Middleware to authenticate requests using JWT
function auth(req, res, next) {
    const token = req.headers.token; // Extract the token from the request headers

    if (!token) {
        return res.json({ message: "You are not logged in" }); // Return error if no token is provided
    }

    try {
        // Verify the token using the secret key and decode its payload
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username; // Attach the decoded username to the request object
        next(); // Pass control to the next middleware or route handler
    } catch (error) {
        return res.json({ message: "Invalid token" }); // Return error if the token is invalid
    }
}

// Route to fetch the current user's details (requires authentication)
app.get("/me", logger, auth, function (req, res) {
    // Find the user in the `users` array using the username from the request object
    const foundUser = users.find(user => user.username === req.username);

    if (!foundUser) {
        return res.json({ message: "User not found" }); // Return error if the user is not found
    }

    // Return the user's details (username and password)
    res.json({ username: foundUser.username, password: foundUser.password });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});