const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const itemsschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
});

const categoryschema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userschema);
const item = mongoose.model("item", itemsschema);
const cat = mongoose.model("cat", categoryschema);
module.exports = {
  User,
  item,
  cat,
};
