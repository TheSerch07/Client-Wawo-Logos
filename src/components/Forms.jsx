import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import styles from "../styles/Forms.module.css"
import { useNavigate } from "react-router-dom";
import { setDescription, setWords, setSlogan, setStyles, setEmail } from "../features/form/formSlice";
import { useSelector } from 'react-redux';

function Forms() {
    const languageRedux = useSelector((state) => state.language)
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
                {
                    languageRedux.language === "EN" ?
                    <div className={styles.mainForms}>
                        {component === 1 && (<Form buttonBack="Back" buttonText="Next step" submit={false} action={setDescription} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Tell us a bit more" parrafo="We want to know about your brand. Tell us what it's all about, what its mission is, and what products or services it offers." placeholder="Tell us more about your brand/company"/>)}
                        {component === 2 && (<Form buttonBack="Back" buttonText="Next step" submit={false} action={setWords} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Write 5 keywords" parrafo="Write the 5 words that best describe your brand/company." placeholder="Enter your keywords"/>)}
                        {component === 3 && (<Form buttonBack="Back" buttonText="Next step" submit={false} action={setSlogan} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Enter a slogan" parrafo="Write a short and catchy phrase to incoporate in your logo." placeholder="Enter your slogan (Optional)"/>)}
                        {component === 4 && (<Form buttonBack="Back" buttonText="Next step" submit={false} action={setStyles} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Select a logo style"  optionOne="Minimalist" optionTwo="Geometric" optionThree="Futuristic" optionFour="Emblem" optionFive="Modern"/>)}
                        {component === 5 && (<Form buttonBack="Back" buttonText="Send" submit={true} action={setEmail} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Enter your email" parrafo="So we can send you your personalized logo designs." placeholder="Enter your email address."/>)}
                    </div>
                    :
                    <div className={styles.mainForms}>
                        {component === 1 && (<Form buttonBack="Atrás" buttonText="Siguiente paso" submit={false} action={setDescription} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Cuéntanos más" parrafo="Queremos conocer tu empresa. Cuéntanos de qué se trata, cual es su razón de ser y qué productos o servicios ofrece." placeholder="Cuéntanos más de tu empresa"/>)}
                        {component === 2 && (<Form buttonBack="Atrás" buttonText="Siguiente paso" submit={false} action={setWords} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Escribe 5 palabras clave" parrafo="Escribe las 5 palabras que mejor describan tu empresa." placeholder="Ingresa tus palabras clave"/>)}
                        {component === 3 && (<Form buttonBack="Atrás" buttonText="Siguiente paso" submit={false} action={setSlogan} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Ingresa un eslogan" parrafo="Escribe una corta y llamativa frase para incorporar en tu logo." placeholder="Introduce tu eslogan (Opcional)"/>)}
                        {component === 4 && (<Form buttonBack="Atrás" buttonText="Siguiente paso" submit={false} action={setStyles} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Selecciona un estilo de logo"  optionOne="Minimalista" optionTwo="Geometrico" optionThree="Futurista" optionFour="Emblema" optionFive="Moderno"/>)}
                        {component === 5 && (<Form buttonBack="Atrás" buttonText="Enviar" submit={true} action={setEmail} componenteAnterior={() => componenteAnterior(component)} componenteSiguiente={() => componenteSiguiente(component)} titulo="Ingresa tu correo" parrafo="Para poder enviarte tus diseños 100% personalizados." placeholder="Ingresa tu correo"/>)}
                    </div>
                }

            </div>
        </div>
    )
}

export default Forms