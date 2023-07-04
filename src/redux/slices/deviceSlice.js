import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  types: [],
  brands: [],
  devices: [],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 3
}

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload
      state.page = 1
    },
    setBrands: (state, action) => {
      state.brands = action.payload
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload
      state.page = 1
    },
    setDevices: (state, action) => {
      state.devices = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload
    },
    setLimit: (state, action) => {
      state.limit = action.payload
    },

  }
})

export const {
  setTypes,
  setSelectedType,
  setBrands,
  setSelectedBrand,
  setDevices,
  setPage,
  setTotalCount, setLimit
} = deviceSlice.actions;
export default deviceSlice.reducer;