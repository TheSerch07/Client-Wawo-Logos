import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import styles from "../styles/Forms.module.css"
import { useNavigate } from "react-router-dom";
import { setDescription, setWords, setSlogan, setStyles, setEmail } from "../features/form/formSlice";
import { useSelector } from 'react-redux';

function Forms() {

    const formRedux = useSelector((state) => state.form)
    const navigate = useNavigate()
    const [component, setComponent] = useState(1);
    console.log(formRedux, "Funciona el estado (componente form)?")

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

    return (
        <div>
            <Header useStyle={false}/>
            <div className={styles.mainFormsChild}>
                <div className={styles.mainForms}>
                    {component === 1 && (<Form buttonText="Siguiente paso" submit={false} action={setDescription} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Cuéntanos más" parrafo="Queremos conocer tu empresa. Cuéntanos de qué se trata, cual es su razón de ser y qué productos o servicios ofrece." placeholder="Cuéntanos más de tu empresa"/>)}
                    {component === 2 && (<Form buttonText="Siguiente paso" submit={false} action={setWords} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Escribe 5 palabras clave" parrafo="Escribe las 5 palabras que mejor describan tu empresa." placeholder="Ingresa tus palabras clave"/>)}
                    {component === 3 && (<Form buttonText="Siguiente paso" submit={false} action={setSlogan} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Ingresa un eslogan" parrafo="Escribe una corta y llamativa frase para incorporar en tu logo." placeholder="Introduce tu eslogan (Opcional)"/>)}
                    {component === 4 && (<Form buttonText="Siguiente paso" submit={false} action={setStyles} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Selecciona un estilo de logo"  />)}
                    {component === 5 && (<Form buttonText="Enviar" submit={true} action={setEmail} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Ingresa tu correo" parrafo="Para poder enviarte tus diseños 100% personalizados." placeholder="Ingresa tu correo"/>)}
                </div>

            </div>
        </div>
    )
}

export default Forms