import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/form/formSlice";
import languageReducer from "../features/language/languageSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    language: languageReducer
  },
})