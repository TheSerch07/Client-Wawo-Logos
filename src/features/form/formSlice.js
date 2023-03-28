import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nombreEmpresa: "",
    cuentanosMas: "",
    palabras: "", 
    eslogan: "", 
    estilos: "",
    correo: ""
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        nombreEmpresa: (state, action) => {
            // ...state,
            state.nombreEmpresa = action.payload
        }
    }
})

export const { nombreEmpresa } = formSlice.actions

export default formSlice.reducer