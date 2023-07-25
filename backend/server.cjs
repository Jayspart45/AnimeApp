const express = require("express");
const bodyParser = require("body-parser");
const { Client, Account } = require("appwrite");

const app = express();
const port = 5000; // Change this to your desired port number

// Create an instance of the Appwrite client
const appwriteClient = new Client();
appwriteClient
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite API Endpoint
  .setProject("YOUR_APPWRITE_PROJECT_ID"); // Your Appwrite Project ID

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// Endpoint for user login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create an instance of the Appwrite account
    const account = new Account(appwriteClient);

    // Use createEmailSession to log in an existing user
    const response = await account.createEmailSession(email, password);

    // Return the session data to the React app
    res.json(response);
  } catch (error) {
    // If an error occurs during login, send an error response to the React app
    res.status(500).json({ error: "Login failed. Please check your credentials." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
