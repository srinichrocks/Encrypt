import styles from '../styles/translate.module.css'
import { useState, useEffect} from 'react';
import axios from 'axios'
import NavBar from './navbar';
import Footer from './footer';
export default function Body() {
    const [message, setMessage] = useState("");
    const [languageFrom, setLanguageFrom] = useState("")
    const [languageList, setLanguageList] = useState([])
    const [languageTo, setLanguageTo] = useState("")
    const [result, setResult] = useState("")

    async function identifyLanguage(){
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", message);

        const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            // 'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
        };

        await axios.request(options).then(function (response) {
            setLanguageFrom(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    const getLanguages = () => {
        const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            // 'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            // const arrayOfData = Object.keys(response.data.data).map(
            //     (key) => response.data.data[key]
            //   )
            setLanguageList(response.data.data.languages);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(()=>{
        getLanguages()
    },[])
    async function translateText(event){
        event.preventDefault();
        setResult(message)
        
        identifyLanguage();
        // console.log(languageFrom, languageTo)
        const encodedParams = new URLSearchParams();
        // console.log(message)
        encodedParams.append("q", message);
        encodedParams.append("target", languageFrom);
        encodedParams.append("source", languageTo);

        const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            // 'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
        };

        await axios.request(options).then(function (response) {
            setResult(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    const languageSwitch = (selectedLanguage) => {
        setLanguageTo(selectedLanguage.target.value)
    }
    console.log(languageFrom)
    return (
        <div>
            <NavBar/>
            <h1 className='text-center mt-2'>Translate</h1>
            <hr/>
            <section className = "container p-1 back" key = "body" id = "body">
            <form id = "form">
            <div className={styles.cypher}>
                <label className="h3">Language</label>
                <select className="form-select" aria-label=".form-select-lg example" id="inlineFormCustomSelectPref" onChange = {languageSwitch}>
                    {languageList.map((language) => {
                        return (
                            <option key = {language.code} value = {language.code}>{language.language}</option>
                        )
                    })}
                </select>
            </div>
            <div className={styles.side_padding}>
                <label htmlFor="message" className = "h3">Text</label>
                <textarea type="Message" rows = "10" id="message"className = "form-control rounded-0" onChange = {(e) => setMessage(e.target.value)}/>
            </div>
            <div className={styles.side_padding}>
                <button type="submit" className="btn btn-dark btn-lg" onClick={translateText}>Submit</button>
            </div>
            </form>
            <div className={styles.side_padding}>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "10" id = "output" value = {result}/>
            </div>
        </section>
        <Footer/>
        </div>
    );
}