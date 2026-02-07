const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { userId: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
};

const userdb = mongoose.model("User", userSchema);

const otpSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    num_attempts: {
      type: Number,
      required: true,
    },
    is_otp_used: {
      type: Boolean,
      default: false,
    },
    expire_time: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const otpdb = mongoose.model("Otp", otpSchema);

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company_name: { type: String, required: true },
    role: { type: String, required: true },
    source: { type: String },

    interviewMode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
    },

    topicsAsked: { type: String },
    selectionProcedure: { type: String },
    codingDetails: { type: String },
    preparation: { type: String },
    mistakes: { type: String },
    advice: { type: String },
    tips: { type: String },

    fullName: { type: String },
    collegeName: { type: String },
    degree: { type: String },
    passoutYear: { type: Number },
    placedYear: { type: Number },

    selectionRounds: [
      {
        roundType: { type: String },
        roundMode: {
          type: String,
          enum: ["Online", "Offline", "Hybrid"],
        },
        description: { type: String },
      },
    ],

    resources: [
      {
        details: { type: String },
      },
    ],
  },
  { timestamps: true },
);

const postsdb = mongoose.model("Post", postSchema);

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const contactdb = mongoose.model("Contact", contactSchema);

module.exports = {
  userdb,
  otpdb,
  postsdb,
  contactdb,
};
