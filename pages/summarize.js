import NavBar from "./navbar";
import axios from "axios";
import { useState } from "react";
import Footer from "./footer";

export default function summarize(){
    const [message, setMessage] = useState("")
    const [result, setResult] = useState("")
    async function getSummary(){
        const values = JSON.stringify({
            "language":"english",
            "summary_percent":10,
            "text":{message}})
        console.log(values)
        const options = {
            method: 'POST',
            url: 'https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
                'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
            },
            data: values
            };
        
            axios.request(options).then(function (response) {
                setResult(response.data.summary)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }
    return(
        <div>
            <NavBar/>
            <p className="display-4">Summarization</p>
            <form id = "form">
                <div>
                    <label htmlFor="message" className = "h1">Message</label>
                    <textarea type="Message" rows = "10" id="message" className = "form-control rounded-0" onChange = {(e) => setMessage(e.target.value)}/>
                </div>
                <div>
                    <button onClick = {getSummary()}type="submit" className="btn btn-dark btn-lg">Submit</button>
                </div>
            </form>
            <div>
                <label className="display-4">Summary</label>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "20" value = {result}/>
            </div>
            <Footer/>
        </div>
    )
}