import styles from "../styles/Obtain.module.css"

function Obtain({ price, img, title, paragrah }) {
    return (
        <div className={styles.mainObtain}>
            <div className={styles.divPrice}>
                {price}
            </div>
            <img className={styles.img} src={img} alt="OpcionesLogo"/>
            <div>
                <h2>Aqui va lo que va</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a neque vel nisl varius tincidunt.</p>
            </div>
        </div>
    )
}

export default Obtain