import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"; // Assuming bcrypt is being used for hashing passwords
import generateToken from "../Config/generateToken.js";
import User from "../Model/userModel.js"; // Assuming the file path is correct

export const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    res.status(400);
    throw new Error("Please input both email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("No user found by this email .");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(401); // Unauthorized
    throw new Error("Invalid email or password");
  }

  // If passwords match, return success response with a token
  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});
export const registerUser = expressAsyncHandler(async (req, res) => {

    
  // Destructuring assignment
  const { name, email, password } = req.body;

  // Validate input fields
  if (!name || !email || !password) {
    res.status(400); // Bad request status
    throw new Error("Please fill all the fields");
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400); // Bad request status
    throw new Error("User already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // Save the user to the database
  const savedUser = await newUser.save();

  if (savedUser) {
    res.status(201).json({
      // 201 status for successful resource creation
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      token: generateToken(savedUser._id), // JWT token for authentication
    });
  } else {
    res.status(500); // Internal server error
    throw new Error("Unable to create user");
  }
});
