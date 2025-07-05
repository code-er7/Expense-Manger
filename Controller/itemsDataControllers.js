import expressAsyncHandler from "express-async-handler";
import Expense from "../Model/dataModel";

const getAllData = expressAsyncHandler(async (req, res) => {
  const user = req.user;
  const id = user._id;
  const AllExpense = await Expense.find({ userId: id }).populate(
    "userId",
    "name email"
  );
  if (AllExpense.length === 0) {
    throw new Error("No Data found for the user .");
  }
  res.status(200).json({ message: "data found ", data: AllExpense });
});

const addItem = expressAsyncHandler(async (req, res) => {
  const { date, name, price } = req.body;
  const userId = req.user._id;
  let expense = await Expense.findOne({ userId, date });
  if (expense) {
    expense.items.push({ name, price });
    await expense.save();
    return res.status(200).json({ message: "Item succesfully added" });
  } else {
    expense = new Expense({
      userId,
      date,
      items: [{ name, price }],
    });
    await expense.save();
    return res.status(201).json({message: "New expense created with the item.",
    });
  }
});
