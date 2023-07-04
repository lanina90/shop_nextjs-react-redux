import {configureStore} from "@reduxjs/toolkit";
import user from '../redux/slices/userSlice'
import device from '../redux/slices/deviceSlice'


const store = configureStore({
  reducer: {
    user,
    device
  },

});

export default store;