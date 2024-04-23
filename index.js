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

async function fetchInformation(){
    // const users = await User.findById("6027d1fd8d4a543a2049d1a0");
    // const users = await User.find({isMarried: false}).select("name salary").sort("-salary").limit(1);
    const users = await User.find({isMarried: false}).countDocuments();
    console.log(users);
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
