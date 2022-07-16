import styles from '../styles/navbar.module.css'
import Link from 'next/link'
export default function NavBar() {
    return(
        <section className={styles.grad}>
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <Link href="/"><a className="navbar-brand">NLP Analysis</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link href="/"><a className="nav-item nav-link text-white">Home</a></Link>
                    <Link href="/translate"><a className="nav-item nav-link text-white">Translate</a></Link>
                    <Link href="/textAnalysis"><a className="nav-item nav-link text-white">Text Analysis</a></Link>
                    <Link href="/jokes"><a className="nav-item nav-link text-white">Jokes</a></Link>
                    <a className="nav-item nav-link text-white" href="https://www.srinich.me/" target="_blank" rel = "noreferrer">About Me🌐</a>
                    </div>
                </div>
            </nav>
        </div>
        </section>
    )
}