import styles from '../styles/navbar.module.css'
export default function NavBar() {
    return(
        <section className={styles.grad}>

        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <a className="navbar-brand" href="/">Sri's Utilities App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link text-white" href="/">Home</a>
                    <a className="nav-item nav-link text-white" href="/translate">Translate</a>
                    <a className="nav-item nav-link text-white" href="/textAnalysis">Text Analysis</a>
                    <a className="nav-item nav-link text-white" href="/jokes">Jokes</a>

                    <a className="nav-item nav-link text-white" href="https://www.srinich.me/" target="_blank">About Me🌐</a>
                    </div>
                </div>
            </nav>
        </div>
        </section>
    )
}