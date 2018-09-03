const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Location = require("./Location");
// const Meeting = require("./Meeting");
// const User = require("./User");
// const Language = require("./Language");

const translatorSchema = Schema({
  loginData: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  profileImageUrl: {
    type: String
  },
  //   role: {
  //     type: String,
  //     enum: ["Volunteer", "Professional"],
  //     required: true
  //   },
  //   location: { type: Schema.Types.ObjectId, ref: "Location" },
  telephone: String,
  //   languages: [
  //     {
  //       language: { type: Schema.Types.ObjectId, ref: "Language" },
  //       level: { type: String, enum: ["A1", "A2", "B1", "B2", "C1", "C2"] }
  //     }
  //   ],
  rating: Number,
  availability: String,
  price: Number,
  background: Array, //relevant job experience for example
  //   meeting: [
  //     {
  //       meeting: { type: Schema.Types.ObjectId, ref: "Meeting" },
  //       status: { type: String, enum: ["confirmed", "waiting", "cancelled"] }
  //     }
  //   ],
  prefferedSetting: Array //for example doesn't want to work with people who went through specific experiences
});

translatorSchema.statics.getLoginData = function getLoginData() {
  return Translator.find({}).populate("loginData");
};

const Translator = mongoose.model("Translator", translatorSchema);
module.exports = Translator;
