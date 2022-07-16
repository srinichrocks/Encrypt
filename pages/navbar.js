import styles from '../styles/navbar.module.css'
export default function NavBar() {
    return(
        <section className={styles.grad}>

        <div className="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-dark py-3">
                <a class="navbar-brand" href="/">Sri's Utilities App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link text-white" href="/">Home</a>
                    <a class="nav-item nav-link text-white" href="/translate">Translate</a>
                    <a class="nav-item nav-link text-white" href="/textAnalysis">Text Analysis</a>
                    <a class="nav-item nav-link text-white" href="/jokes">Jokes</a>

                    <a class="nav-item nav-link text-white" href="https://www.srinich.me/" target="_blank">About Me🌐</a>
                    </div>
                </div>
            </nav>
        </div>
        </section>
    )
}