import mongoose from 'mongoose';


const AuthorsSchema = new mongoose.Schema({
  a1: String,
  a2: String,
  a3: String,
  a4: String,
  a5: String,
  a6: String,
  a7: String,
  a8: String,
  a9: String,
  a10: String,
  a11: String,
  a12: String,
  a13: String,
  a14: String,
  a15: String,
  a16: String,
  a17: String,
  a18: String,
  a19: String,
  a20: String
}, { _id: false });

const ScopusIdSchema = new mongoose.Schema({
  id1: String,
  id2: String,
  id3: String,
  id4: String,
  id5: String,
  id6: String,
  id7: String,
  id8: String,
  id9: String,
  id10: String,
  id11: String,
  id12: String,
  id13: String,
  id14: String,
  id15: String,
  id16: String,
  id17: String,
  id18: String,
  id19: String,
  id20: String
}, { _id: false });

const AffiliationsSchema = new mongoose.Schema({
  af1: String,
  af2: String,
  af3: String,
  af4: String,
  af5: String,
  af6: String,
  af7: String,
  af8: String,
  af9: String,
  af10: String,
  af11: String,
  af12: String,
  af13: String,
  af14: String,
  af15: String,
}, { _id: false });

const UUIDSchema = new mongoose.Schema({
  id1: String,
  id2: String,
  id3: String,
  id4: String,
  id5: String,
  id6: String,
  id7: String,
  id8: String,
  id9: String,
  id10: String,
  id11: String,
  id12: String,
  id13: String,
  id14: String,
  id15: String,
  id16: String,
  id17: String,
  id18: String,
  id19: String,
  id20: String
}, { _id: false });

const ResearchPaperSchema = new mongoose.Schema({
  Authors: AuthorsSchema,
  "Scopus ID": ScopusIdSchema,
  Title: String,
  Year: Number,
  "Source title": String,
  Volume: String,
  Issue: String,
  "Page start": String,
  "Page end": String,
  DOI: String,
  Affiliations: AffiliationsSchema,
  "Funding Details": String,
  References: String,
  "Correspondence Address": String,
  Editors: String,
  Sponsors: String,
  Publisher: String,
  "Conference name": String,
  "Conference date": String,
  "Conference location": String,
  CODEN: String,
  "PubMed ID": String,
  "Language of Original Document": String,
  "Abbreviated Source Title": String,
  "Document Type": String,
  "Publication Stage": String,
  "Open Access": String,
  Source: String,
  EID: String,
  "Funding Text": String,
  UUID: UUIDSchema
});

ResearchPaperSchema.index({
  "Title": "text",
  "Year": "text",
  "Source title": "text",
  "Volume": "text",
  "Issue": "text",
  "Page start": "text",
  "Page end": "text",
  "DOI": "text",
  "Funding Details": "text",
  "References": "text",
  "Correspondence Address": "text",
  "Editors": "text",
  "Sponsors": "text",
  "Publisher": "text",
  "Conference name": "text",
  "Conference date": "text",
  "Conference location": "text",
  "CODEN": "text",
  "PubMed ID": "text",
  "Language of Original Document": "text",
  "Abbreviated Source Title": "text",
  "Document Type": "text",
  "Publication Stage": "text",
  "Open Access": "text",
  "Source": "text",
  "EID": "text",
  "Funding Text": "text"
}, {
  name: "searchIndex"
});



const ResearchPaper = mongoose.models.ResearchPaper || mongoose.model('ResearchPaper', ResearchPaperSchema);

export default ResearchPaper;
