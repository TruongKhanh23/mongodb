const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Database Is Connected"))
  .catch((err) => console.log(err));

// Schema (Shape of a Document)
// Document, Collection, Database

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String,
});
const User = mongoose.model("User", userSchema);

// Comparision Operator
// gt  - greater
// gte - greter equal
// lt  - less than
// lte - less than equal
// ne  - not equal
// in  - include

// Problem I will solve
// Find those users whose age is greater than 40 or thay are unmarried
// Find Only name
// Shorted them by name

async function fetchInformation() {
  // const users = await User.findById("6027d1fd8d4a543a2049d1a0");
  // const users = await User.find({isMarried: false}).select("name salary").sort("-salary").limit(1);
  // const users = await User.find({isMarried: false}).countDocuments();
  // const users = await User.find({salary: {$in: [50000, 50000000, 25000]}});
  // const users = await User.find().and([{ isMarried: true }, { age: 30 }]);
  // const users = await User.find().or([{age: {$gt: 40}}, {isMarried: false}]).select("name").sort("name");

  //   const user = await User.findById("662753bbc8030ebd88e5d023");
  //   user.isMarried = false;
  //   await user.save();

  //   const user = await User.findByIdAndUpdate("662753bbc8030ebd88e5d023", {age: 25, isMarried: true}, {new: true, runValidators: true});
  //   await user.save();

  //   await User.deleteOne({ _id: "662753bbc8030ebd88e5d023"})
  await User.deleteMany({ isMarried: false });

  //   console.log(user);
}
fetchInformation();

// async function storeInformation() {
//   const user = new User({
//     name: "Truong Khanh",
//     age: 24,
//     isMarried: true,
//     salary: 50000000,
//     gender: "Male",
//   });
//   await user.save();
//   console.log(user);
// }
// storeInformation();
