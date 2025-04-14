import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
  originalURl: {
    type: String,
    required: true,
  },
  shortID: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
  },
});

const URLModel = mongoose.model("URL", URLSchema);

export default URLModel;
