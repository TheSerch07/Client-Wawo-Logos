import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import styles from "../styles/Forms.module.css"
import { useNavigate } from "react-router-dom";

function Forms( {nombreEmpresa}) {
    
    const navigate = useNavigate()
    const [form, setForm] = useState({
        nombreEmpresa: "",
        cuentanosMas: "",
        palabras: "", 
        eslogan: "", 
        estilos: "",
        correo: ""
    });
    
    const [component, setComponent] = useState(1);

    // useEffect(() => {
    //     setForm({
    //         ...form,
    //         nombreEmpresa: nombreEmpresa
    //     });
    //   }, [nombreEmpresaset]);

    console.log(form, "elform poderoso")

    function componenteAnterior(component) {
        if (component === 1) {
            navigate("/")
        } else {
            setComponent(component - 1)
        }
    }

    function componenteSiguiente(component) {
        setComponent(component + 1)
    }



    console.log(component, "que no se rompa xd")
    return (
        <div>
            <Header useStyle={false}/>
            <div className={styles.mainForms}>
                {component === 1 && (<Form componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Cuéntanos más" parrafo="Queremos conocer tu empresa. Cuéntanos de qué se trata, cual es su razón de ser y qué productos o servicios ofrece." placeholder="Cuéntanos más de tu empresa"/>)}
                {component === 2 && (<Form componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Escribe 5 palabras clave" parrafo="Escribe las 5 palabras que mejor describan tu empresa." placeholder="Ingresa tus palabras clave"/>)}
                {component === 3 && (<Form componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Ingresa un eslogan" parrafo="Escribe una corta y llamativa frase para incorporar en tu logo." placeholder="Introduce tu eslogan (Opcional)"/>)}
            </div>
        </div>
    )
}

export default Forms