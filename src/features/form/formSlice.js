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
        setCompanyName: (state, action) => {
            // ...state,
            state.nombreEmpresa = action.payload
        }
    }
})

export const { setCompanyName } = formSlice.actions

export default formSlice.reducer