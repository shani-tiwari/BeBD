const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    fullName: {
      firstName: { 
        type: String, 
        required: true 
      },
      lastName: { 
        type: String, 
        required: true 
      },
    },
    password: { 
        type: String, 
        required: true, 
        select: false 
    },
    role: {
      type: String,
      enum: ['user', 'pro', 'admin'],
      default: 'user'
    }
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
