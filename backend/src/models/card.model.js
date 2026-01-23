const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, lowercase: true },

    title: { type: String, required: true, trim: true },

    description: { type: String, required: true, trim: true },

    implementationPlan: { type: String, required: true, trim: true },

    image: { url: String, alt: String },

    likes: { type: Number, default: 0 },

    category: {
      type: String,
      enum: ["frontend", "backend", "fullstack", "other"],
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },

    resources: [
      {
        title: String,
        url: String,
        type: {
          type: String,
          enum: ["article", "video", "repo"],
        },
      },
    ],

    skills: [String],
    version: {
      type: Number,
      default: 1,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // admin control
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
  },
  { timestamps: true },
);

const cardModel = mongoose.model("Card", CardSchema);
module.exports = cardModel;
