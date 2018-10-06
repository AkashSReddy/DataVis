const mongoose = require("mongoose");
const bycrypt = require("bycrypt-nodejs");
const salt_factor = 8;

mongoose.set("useCreateIndex", true);

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    enum: ["admin", "student", "teacher"],
    default: "student"
  }
});

userSchema.methods.generateHash = password => {
  return bycrypt.hashSync(password, bycrypt.genSaltSync(salt_factor), null);
};

module.exports = mongoose.model("User", userSchema);
