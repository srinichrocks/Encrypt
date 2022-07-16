import NavBar from "./navbar";
import axios from "axios";
import { useState } from "react";
import Footer from "./footer";

export default function sentiment(){
    const [message, setMessage] = useState("")
    const [result, setResult] = useState("")
    async function getSentiment(){
        const options = {
            method: 'POST',
            url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
              'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
            },
            data: '{"language":"english","text":"Falcon 9’s first stage has landed on the Of Course I Still Love You droneship – the 9th landing of this booster"}'
          };
          
          axios.request(options).then(function (response) {
            setResult("Negative: " + response.data.sentiment_list[0].neg + "\nNeutral: " + response.data.sentiment_list[0].neu + "\nPositive: " + response.data.sentiment_list[0].pos + "\nCompound: " + response.data.sentiment_list[0].compound)  
          }).catch(function (error) {
              console.error(error);
          });
    }
    
    return(
        <div>
            <NavBar/>
            <p className="display-4">Sentiment Analysis</p>
            <form id = "form">
                <div>
                    <label htmlFor="message" className = "h1">Message</label>
                    <textarea type="Message" rows = "10" id="message" className = "form-control rounded-0" onChange = {(e) => setMessage(e.target.value)}/>
                </div>
                <div>
                    <button onClick = {getSentiment()}type="submit" className="btn btn-dark btn-lg">Submit</button>
                </div>
            </form>
            <div>
                <label className="display-4">Sentiment</label>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "5" value = {result}/>
            </div>
            <Footer/>
        </div>
    )
}