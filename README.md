# WEEK6.2_JWT_AUTH_MONGO

A simple Node.js project demonstrating JWT authentication with MongoDB.

## Features
- User authentication using JWT (JSON Web Tokens)
- MongoDB integration for storing user data
- Basic frontend in `public/index.html`

## Project Structure
```
WEEK6.2_JWT_AUTH_MONGO/
├── index.js           # Main server file
├── jwt(off).js        # JWT logic (possibly disabled/off version)
├── public/
│   └── index.html     # Frontend HTML
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository or copy the folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your MongoDB connection string in the code (usually in `index.js`).

### Running the Server
```bash
node index.js
```

The server will start and serve the frontend from the `public/` directory.

## Usage
- Open your browser and navigate to `http://localhost:PORT` (replace PORT with the port specified in `index.js`).
- Use the frontend to register/login and test JWT authentication.

## Notes
- `jwt(off).js` may contain alternative or disabled JWT logic for reference.
- This project is for educational purposes and does not include production-level security or error handling.

## License
MIT

