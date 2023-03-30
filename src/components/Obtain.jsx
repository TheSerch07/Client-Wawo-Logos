import styles from "../styles/Obtain.module.css"

function Obtain({ price, img, title, paragrah }) {
    return (
        <div className={styles.mainObtain}>
            <div className={styles.divPrice}>
                {price}
            </div>
            <img className={styles.img} src={img} alt="OpcionesLogo"/>
            <div className={styles.containText}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p} dangerouslySetInnerHTML={{ __html: paragrah }}></p>
            </div>
        </div>
    )
}

export default Obtain