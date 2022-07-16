import NavBar from "./navbar";
import axios from "axios";
import { useState } from "react";
import Footer from "./footer";

export default function ner(){
    const [message, setMessage] = useState("")
    const [result, setResult] = useState("")
    async function getNer(event){
        event.preventDefault();
        const options = {
            method: 'POST',
            url: 'https://text-analysis12.p.rapidapi.com/ner/api/v1.1',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
                'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
            },
            data: {
                "language":"english",
                "text":message
            }
            };

            await axios.request(options).then(function (response) {
                console.log(response.data)
                if (response.data.ner.length === 0) {
                    setResult("No entities present")
                } else {
                    var value = ""
                    for (const i of response.data.ner) {
                        value += (i.entity + "\n")
                    }
                    setResult(value)
                }
            }).catch(function (error) {
                console.error(error);
            }); 
    }
    
    return(
        <div>
            <NavBar/>
            <p className="h1 text-center mt-2">Named-entity Recognition</p>
            <hr/>
            <div className='row mt-4 text-center'>
            <div className='col-sm-1'/>
            <div className='col-sm-4 mx-2'>
                <label htmlFor="message" className = "h3">Message</label>
                <textarea type="Message" rows = "15" id="message" className = "form-control rounded-0" onChange = {(e) => setMessage(e.target.value)}/>
           </div>
            <div className='col-sm-2 align-content-center justify-content-center'>
            <button onClick = {getNer} type="submit" className="btn btn-dark btn-lg mt-3">Generate</button>
            </div>
            <div className='col-sm-4 mx-2 align-content-center'>
                <label className="h3">Entities</label>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "10" value = {result}/>
            </div>
            </div>        
            <Footer/>
        </div>
    )
}