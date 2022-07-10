import styles from '../styles/Header.module.css'
export default function Header() {
    return(
        <section className={styles.section}>
            <div className={styles.title}>
                <p className='display-1 h1'>Encrypt</p>
            </div>
        </section>
    )
}