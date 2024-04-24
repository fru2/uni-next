import mongoose from "mongoose";

const Authors = new mongoose.Schema({
  a1: String,
});
const Affiliations = new mongoose.Schema({
  af: String,
});
const ScopusId = new mongoose.Schema({
  id: String,
});

const data = new mongoose.Schema({
  Authors: [{
    type: Authors,
    required: true
  }],
  "Scopus ID": [{
    type: ScopusId

  }],
  Title: { type: String, required: true },
  Year: { type: Number },
  "Source title": { type: String },
  Volume: { type: String },
  Issue: { type: String },
  "Page start": { type: String },
  "Page end": { type: String },
  DOI: { type: String },
  Affiliations: [{
    type: Affiliations,
  }],
  "Funding Details": { type: String },
  References: { type: String },
  "Correspondence Address": { type: String },
  Editors: { type: String },
  Sponsors: { type: String },
  Publisher: { type: String },
  "Conference name": { type: String },
  "Conference date": { type: String },
  "Conference location": { type: String },
  CODEN: { type: String },
  "PubMed ID": { type: String },
  "Language of Original Document": { type: String },
  "Abbreviated Source Title": { type: String },
  "Document Type": { type: String },
  "Publication Stage": { type: String },
  "Open Access": { type: String },
  Source: { type: String },
  EID: { type: String },
});

const dataForValidate = new mongoose.Schema({
  data: {
    type: data,
    required: true,
  },
  isValidatedByDean: {
    type: Boolean,
    default: null,
  },
  isValidatedByVC: {
    type: Boolean,
    default: null,
  },
  isValidatedByLibrarian: {
    type: Boolean,
    default: null,
  },
});

const DataTobePush =
  mongoose.models.DataForValidate ||
  mongoose.model("DataForValidate", dataForValidate);

export default DataTobePush;
