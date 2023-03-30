import styles from "../styles/Obtains.module.css"
import Obtain from "./Obtain"
import OpcionesLogo from "../assets/OpcionesLogo.svg"
import BajaResolucion from "../assets/BajaResolucion.png"
import DisenosPersonalizados from "../assets/DiseñosPersonalizados.svg"
import AltaCalidad from "../assets/AltaCalidad.svg"
import ArchivosEditable from "../assets/Editables.svg"
import TiempoYDinero from "../assets/TiempoyDinero.svg"
import RoyaltyFree from "../assets/RoyaltyFree.svg"

function Obtains() {
    return (
        <div className={styles.mainObtains}>
            <h1 className={styles.title}>¿Qué obtienes?</h1>
            <div className={styles.eachObtain}>
                <div className={`${styles.obtain} ${styles.obtainResponsive}`}>
                    < Obtain price="Gratis" img={OpcionesLogo} title="4 opciones de logo" paragrah="Recibirás a tu correo 4 opciones aproximadas de ti logo creadas con inteligencia artificial."/>
                    < Obtain price="Gratis" img={BajaResolucion} title="PNGs de baja resolución" paragrah="PNGs de baja resolución tamaño 240x240px. Sin textos (nombre de empresa y eslogan)."/>
                    < Obtain price="Gratis" img={DisenosPersonalizados} title="Diseños personalizados" paragrah="Obten diseños 100% únicos creados específicamente para tu empresa y sus necesidades."/>
                </div>
                <div className={`${styles.obtain} ${styles.obtainResponsiveTwo}`}>
                    < Obtain price="Pago" img={AltaCalidad} title="PNG de alta calidad" paragrah="Imagen PNG de alta calidad<br>para usar en tus redes<br>sociales y mucho más."/>
                    < Obtain price="Pago" img={ArchivosEditable} title="Archivos editables" paragrah="Archivos SVG, EPS y AI<br>de tu logo que puedes<br>modificar a tu gusto."/>
                    < Obtain price="Pago" img={TiempoYDinero} title="Ahorro de tiempo y dinero" paragrah="Con nuestra plataforma de IA no tendrás que gastar millones ni esperar meses para tu logo ideal."/>
                    < Obtain price="Pago" img={RoyaltyFree} title="Royalty Free" paragrah="Obtén los derechos de uso comercial de tu logo y utilízalo donde y cuando quieras, sin pagar derechos de autor."/>
                </div>
            </div>
        </div>
    )
}

export default Obtains