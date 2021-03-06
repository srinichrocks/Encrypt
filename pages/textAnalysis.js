import styles from '../styles/textAnalysis.module.css'
import NavBar from "./navbar";
import summary from '../public/summary.jpg'
import Image from 'next/image';
import sentiment from '../public/sentiment.jpeg'
import ner from '../public/ner.png'
import detect from '../public/detect.jpeg'
import { motion } from 'framer-motion';
import Footer from './footer';
import Link from 'next/link';
export default function TextAnalysis() {
    return (
    <div className={styles.whole}>
        <NavBar/>
        <h1 className='text-center mt-2'>Text Analysis</h1>
        <hr/>
        <div className="row mt-3 mx-2 container-fluid">
            <div className="col-md-3 mt-2"> 
            <Link target = "_blank" href="/summarize" rel="noreferrer">
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
                  duration: 0.5
                }}}>
                <div className="card-content">
                <Image className="card-img-top" src={summary} alt="Card image cap" width={200} height = {200}/>
                  <div className="card-body">
                    <h4 className="card-title">Text Summarization</h4>
                    <q className="card-text">Automatic summarization is the process of shortening a set of data computationally, to create a subset that represents the most important or relevant information within the original content</q>
                  </div>
                </div>
              </motion.div>
              </Link>
            </div>
            <div className="col-md-3 mt-2"> 
            <Link target = "_blank" href="/sentiment" rel="noreferrer">
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
                  duration: 0.5
                }}}>
                <div className="card-content">
                <Image className="card-img-top" src={sentiment} alt="Card image cap" width={200} height = {200}/>
                  <div className="card-body">
                    <h4 className="card-title">Sentiment Analysis</h4>
                    <q className="card-text">Sentiment analysis is the use of natural language processing, text analysis, computational linguistics, and biometrics to systematically identify, extract, quantify, and study affective states and subjective information</q>
                  </div>
                </div>
              </motion.div>
              </Link>
            </div>
            <div className="col-md-3 mt-2"> 
            <Link target = "_blank" href="/ner" rel="noreferrer">
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
                  duration: 0.5
                }}}>
                <div className="card-content">
                <Image className="card-img-top" src={ner} alt="Card image cap" width={200} height = {200}/>
                  <div className="card-body">
                    <h4 className="card-title">Named-entity Recognition</h4>
                    <q className="card-text">Named-entity recognition is a subtask of information extraction that seeks to locate and classify named entities mentioned in unstructured text into pre-defined categories such as person names, organizations, locations, medical codes, time expressions, quantities, monetary values, percentages, etc.</q>
                  </div>
                </div>
              </motion.div>
              </Link>
            </div>
            <div className="col-md-3 mt-2"> 
            <Link target = "_blank" href="/detection" rel="noreferrer">
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
                  duration: 0.5
                }}}>
                <div className="card-content">
                <Image className="card-img-top" src={detect} alt="Card image cap" width={200} height = {200}/>
                  <div className="card-body">
                    <h4 className="card-title">Language Detection</h4>
                    <q className="card-text">Language detection is a technique which identifies the language of a text and the parts of that text in which the language changes, all the way down to the word level</q>
                  </div>
                </div>
              </motion.div>
              </Link>
            </div>
            </div>
        <Footer/>
        
    </div>
    )
}