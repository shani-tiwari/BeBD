const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, lowercase: true },

    title: { type: String, required: true, trim: true },

    description: { type: String, required: true, trim: true },

    implementationPlan: { type: String, required: true, trim: true },

    image: { url: String, alt: String },

    likes: { type: Number, default: 0 },

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    category: {
      type: String,
      enum: ["frontend", "backend", "fullstack"],
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

    learn: [String],

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

CardSchema.pre("save", function (next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^\w-]+/g, "");
  }
  next();
});

const cardModel = mongoose.model("Card", CardSchema);
module.exports = cardModel;
