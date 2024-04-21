import mongoose from "mongoose";

const Authors = new mongoose.Schema({
  a1: String,
});
const Affiliations = new mongoose.Schema({
  af: String,
});

const data = new mongoose.Schema({
  Authors: [
    {
      type: Authors,
      required: true,
    },
  ],
  Title: { type: String, required: true },
  Year: { type: Number },
  Affiliations: {
    type: Affiliations,
  },
});

const dataForValidate = new mongoose.Schema({
  data: {
    type: data,
    required: true,
  },
  isValidatedByDean: {
    type: Boolean,
    default: false,
  },
  isValidatedByVC: {
    type: Boolean,
    default: false,
  },
  isValidatedByLibrarian: {
    type: Boolean,
    default: false,
  },
});

const DataTobePush =
  mongoose.models.DataForValidate ||
  mongoose.model("DataForValidate", dataForValidate);

export default DataTobePush;
