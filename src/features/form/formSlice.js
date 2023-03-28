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
        },
        setDescription: (state, action) => {
            state.cuentanosMas = action.payload
        }, 
        setWords: (state, action) => {
            state.palabras = action.payload
        },
        setSlogan: (state, action) => {
            state.eslogan = action.payload
        },
        setStyles: (state, action) => {
            state.estilos = action.payload
        },
        setEmail: (state, action) => {
            state.correo = action.payload
        },
        setClean: (state, action) => {
            state.nombreEmpresa = "",
            state.cuentanosMas = "",
            state.palabras = "",
            state.eslogan = "",
            state.estilos = "",
            state.correo = ""
        }
    }
})

export const { setCompanyName, setDescription, setWords, setSlogan, setStyles, setEmail, setClean } = formSlice.actions

export default formSlice.reducer