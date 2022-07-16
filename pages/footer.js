import styles from '../styles/footer.module.css'
export default function Footer() {
    return(
        <section id = "footer" className={styles.grad}>
<footer class="page-footer font-small blue pt-4 mt-3">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h1 class="text-uppercase text-center text-light">Srinidhi Raghavendran</h1>
        <p className="text-center text-light mt-3">Please contact me if you have any questions or concerns</p>

      </div>


      <div class="col-md-3 mb-md-0 mb-3 text-center">

        <h5 class="text-uppercase text-white">Menu</h5>

        <ul class="list-unstyled text-white">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/contact-me">Contact Me</a>
          </li>
        </ul>

      </div>
      <div class="col-md-3 mb-md-0 mb-3 text-center">

        <h5 class="text-uppercase text-white">Socials</h5>

        <ul class="list-unstyled text-white">
          <li>
            <a href="https://www.linkedin.com/in/srinidhi-raghavendran-a94834164/" target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/srinichrocks" target="_blank">Github</a>
          </li>
          <li>
            <a href="https://medium.com/@sraghavendran17" target="_blank">Medium</a>
          </li>
        </ul>

      </div>

    </div>
    

  </div>
  

  <div class="footer-copyright text-center py-3 text-white">© 2022 Srinidhi Raghavendran. Created using NextJS.
  </div>

</footer>

        </section>
    )
}