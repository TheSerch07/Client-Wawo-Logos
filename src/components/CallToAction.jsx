import styles from '../styles/CallToAction.module.css'

function CallToAction() {
    return (
        <div className={styles.mainCallToAction}>
            <div className={styles.divTitle}>
                <h1 className={styles.title}>¿Qué esperas para tener el logo perfecto para tu marca?</h1>
            </div>   
            <div className={styles.divButton}>
                <input className={styles.input} type="text" placeholder="Introduce el nombre de tu empresa"/>
                <button className={styles.button}>Quiero mi logo</button>
            </div>
        </div>
    )
}

export default CallToAction