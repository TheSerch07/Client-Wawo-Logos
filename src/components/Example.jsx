import styles from "../styles/Example.module.css"

function Example({ img }) {
    
    return (
        <div className={styles.containerExample}>
            {/* <h1>Hace rato no juego con props</h1> */}
            <img className={styles.img} src={img} alt="Logo-Example" />
        </div>
    )
}

export default Example