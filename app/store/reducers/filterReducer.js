import Search from '@/app/components/dashboard/Search';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sort: 'asc',
    search: '',
    authors: [],
    affiliations: [],
    year: [],
    funding: [],
  },
  reducers: {
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    addAuthorFilter: (state, action) => {
      state.authors = state.authors.append(action.payload);
    },
    removeAuthorFilter: (state, action) => {
      state.authors = state.authors.filter(
        (author) => author !== action.payload
      );
    },
    addAffiliationFilter: (state, action) => {
      state.affiliations = state.affiliations.append(action.payload);
    },
    removeAffiliationFilter: (state, action) => {
      state.affiliations = state.affiliations.filter(
        (affiliation) => affiliation !== action.payload
      );
    },
    addYearFilter: (state, action) => {
      state.year = state.year.append(action.payload);
    },
    removeYearFilter: (state, action) => {
      state.year = state.year.filter((year) => year !== action.payload);
    },
    addFundingFilter: (state, action) => {
      state.funding = state.funding.append(action.payload);
    },
    removeFundingFilter: (state, action) => {
      state.funding = state.funding.filter(
        (funding) => funding !== action.payload
      );
    },
  },
});

export const {
  changeSort,
  setSearch,
  addAuthorFilter,
  removeAuthorFilter,
  addAffiliationFilter,
  removeAffiliationFilter,
  addYearFilter,
  removeYearFilter,
  addFundingFilter,
  removeFundingFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
