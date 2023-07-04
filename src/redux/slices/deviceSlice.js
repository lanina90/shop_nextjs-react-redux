import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  types: [
    {id: 1, name: "Refrigerators"},
    {id: 2, name: "Smartphones"},
    {id: 3, name: "Laptops"},
    {id: 4, name: "TV"},

  ],
  brands: [
    {id: 1, name: "Samsung"},
    {id: 2, name: "Apple"},
    {id: 3, name: "Xiaomi"},
    {id: 4, name: "LG"},
    {id: 5, name: "Sony"},
    {id: 6, name: "OnePlus"},
    {id: 7, name: "Asus"}

  ],
  devices: [
    {
      id: 1,
      name: "IPhone 12 pro",
      price: 25000,
      rating: 5,
      img: ``
    },
    {
      id: 2,
      name: "IPhone 12 pro",
      price: 25000,
      rating: 5,
      img: ``
    },
    {
      id: 3,
      name: "IPhone 12 pro",
      price: 25000,
      rating: 5,
      img: ``
    },
    {
      id: 4,
      name: "IPhone 12 pro",
      price: 25000,
      rating: 5,
      img: ``
    },
    {
      id: 5,
      name: "IPhone 12 pro",
      price: 25000,
      rating: 5,
      img: ``
    },
    {
      id: 6,
      name: "IPhone 12 pro",
      price: 25000,
      rating: 5,
      img: ``
    },
  ],
  selectedType: {},
  selectedBrand: {}

}

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.type = action.payload
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload
    },
    setBrands: (state, action) => {
      state.brands = action.payload
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload
    },
    setDevices: (state, action) => {
      state.devices = action.payload
    },

  }
})

export const {
  setTypes,
  setSelectedType,
  setBrands,
  setSelectedBrand,
  setDevices} = deviceSlice.actions;
export default deviceSlice.reducer;