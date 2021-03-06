import Link from 'next/link';
import translate from '../public/translate.png'
import { motion } from 'framer-motion';
import Image from 'next/image';
import analysis from '../public/analysis.png'
import laugh from '../public/laugh.jpeg'
// import styles from '../styles/homeBody.module.css'

export default function HomeBody() {
    return (
        <div className='justify-content-center text-center'>
            <p className='h1 mt-2'>Welcome</p>
            <hr/>
            <q className='h4 text-center'>Natural language processing is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data.</q>
            <hr/>
            <div>
                <div className='row mt-4 mx-4 text-center'>
       <div className='col-md-4 mt-2'>
      <Link href = "/translate">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }
              }}>
                <div className="card-content">
                <Image className = "card-image-top mt-2" src = {translate} width={200} height = {200} alt = "translate"/>
                  <div className="card-body">
                    <h4 className="card-title">Translate</h4>
                    <p className='card-text text-dark'>
                        Translate text from one language to another
                    </p>
                  </div>
                </div>
              </motion.div>
              </Link>
       </div>
       <div className='col-md-4 mt-2'>
              <Link href = "/textAnalysis">
              <motion.div className="card text-center shadow rounded h-100 mx-2" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }}}>
                <div className="card-content">
                <Image className="card-img-top mt-2" src={analysis} alt="text analysis" width={200} height = {200}/>

                  <div className="card-body">
                    <h4 className="card-title">Text Analysis</h4>
                    {/* <h6 className='card-subtitle text-primary'>Java</h6> */}
                    <section className='card-text text-dark'>
                    <p>Supports Text Summarization, Sentiment Analysis, Named-entity Recognition and Language Detection</p>
                  </section>
                  </div>
                </div>
              </motion.div>
              </Link>
       </div>
       <div className='col-md-4 mt-2'>
       <Link href = "/jokes">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }}}>
                <div className="card-content">
                <Image className = "card-image-top mt-2" src = {laugh} width={200} height = {200} alt = "jokes"/>
                  <div className="card-body">
                    <h4 className="card-title">Jokes</h4>
                    {/* <h6 className='card-subtitle text-primary'>Java, JavaFX</h6> */}
                    <p className='card-text text-dark'>Generate random funny jokes</p>
                  </div>
                </div>
              </motion.div>
              </Link>
       </div>
     </div>

            </div>
            {/* <center className = "mt-4">
            <div className={styles.surround}>
              <div className={styles.base}>
              <div className={styles.holder}></div>
              <div className={styles.thread}>
                <div className={styles.knob}></div>
                <div className={styles.pendulum}>
                </div>
              </div>
              <div className={styles.shadow}></div>
              </div>  
            </div>
            </center> */}
      </div>
    )
}