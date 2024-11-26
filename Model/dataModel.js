import User from "./userModel.js";
const mongoose = require("mongoose");

const expenseItemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Item name
  price: { type: Number, required: true }, // Price of the item
});

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
  date: { type: String, required: true }, // Date in YYYY-MM-DD format
  items: [expenseItemSchema], // Array of expense items
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense ;
