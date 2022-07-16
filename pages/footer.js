import styles from '../styles/footer.module.css'
import Link from 'next/link'
export default function Footer() {
    return(
        <section id = "footer" className={styles.grad}>
<footer className="page-footer font-small blue pt-4 mt-3">

  <div className="container-fluid text-center text-md-left">

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">

        <h1 className="text-uppercase text-center text-light">Srinidhi Raghavendran</h1>
        <p className="text-center text-light mt-3">Please contact me if you have any questions or concerns</p>

      </div>


      <div className="col-md-3 mb-md-0 mb-3 text-center">

        <h5 className="text-uppercase text-white">Menu</h5>

        <ul className="list-unstyled text-white">
          <li>
            <Link href = "/translate">
              <a>Translate</a>
              </Link>
            {/* <a href="/translate">Translate</a> */}
          </li>
          <li>
            <Link href="/textAnalysis"><a>Text Analysis</a></Link>
          </li>
          <li>
            <Link href="/jokes"><a>Jokes</a></Link>
          </li>
        </ul>

      </div>
      <div className="col-md-3 mb-md-0 mb-3 text-center">

        <h5 className="text-uppercase text-white">Socials</h5>

        <ul className="list-unstyled text-white">
          <li>
            <a href="https://www.linkedin.com/in/srinidhi-raghavendran-a94834164/" target="_blank" rel="noreferrer">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/srinichrocks" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li>
            <a href="https://medium.com/@sraghavendran17" target="_blank" rel="noreferrer">Medium</a>
          </li>
        </ul>

      </div>

    </div>
    

  </div>
  

  <div className="footer-copyright text-center py-3 text-white">© 2022 Srinidhi Raghavendran. Created using NextJS.
  </div>

</footer>

        </section>
    )
}