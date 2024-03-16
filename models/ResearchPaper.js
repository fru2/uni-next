import mongoose from 'mongoose';

const ResearchPaperSchema = new mongoose.Schema({
  Authors: {
    a1: { type: String, required: true },
    a2: { type: String },
    a3: { type: String },
    a4: { type: String },
    a5: { type: String },
    a6: { type: String },
  },
  "Author(s) ID": {
    id1: { type: String },
    id2: { type: String },
    id3: { type: String },
    id4: { type: String },
    id5: { type: String },
    id6: { type: String },
  },
  Title: { type: String, required: true },
  Year: { type: Number },
  "Source title": { type: String },
  Volume: { type: String },
  Issue: { type: String },
  "Page start": { type: String },
  "Page end": { type: String },
  DOI: { type: String },
  Affiliations: {
    af1: { type: String },
    af2: { type: String },
  },
  "Funding Details": { type: String },
  "Funding Text 1": { type: String },
  "Funding Text 2": { type: String },
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

const ResearchPaper = mongoose.models.ResearchPaper || mongoose.model('ResearchPaper', ResearchPaperSchema);

export default ResearchPaper;
