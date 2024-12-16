const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON body
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname,"public")))
// Router-level middleware for `userRouter`
const userRouter = express.Router();

// Define routes in `userRouter`
userRouter.get("/login", (req, res) => {
  res.send("Login Page");
});

userRouter.get("/register", (req, res) => {
  res.send("Register Page");
});

userRouter.get("/update/:id", (req, res) => {
  res.send(`Update User with ID: ${req.params.id}`);
});

// Attach `userRouter` to the main app
app.use("/user", userRouter);

// Serve static files from the "public" directory
// Assuming "bublic" is a typo and should be "public"

// Start the server
const PORT = 200; // Use a more common development port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
  });