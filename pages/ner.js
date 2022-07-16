import NavBar from "./navbar";
import axios from "axios";
import { useState } from "react";
import Footer from "./footer";

export default function ner(){
    const [message, setMessage] = useState("")
    const [result, setResult] = useState("")
    async function getNer(){
        const options = {
            method: 'POST',
            url: 'https://text-analysis12.p.rapidapi.com/ner/api/v1.1',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
                'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
            },
            data: '{"language":"english","text":"I love NASA. I wish someday to become an astronaut. I wish to explore many different planets. In the year 2100 space travel will become a reality. Elon Musk along with engineers from SpaceX are working hard to make this dream of many people come true. Currently, space programs cost billions of dollars, in the near future the cost is going to be in the 1000s of dollars."}'
            };

            axios.request(options).then(function (response) {
                setResult(response.data.ner)
                console.log(response.data.ner);
                console.log(typeof(response.data.ner))
            }).catch(function (error) {
                console.error(error);
            }); 
    }
    
    return(
        <div>
            <NavBar/>
            <p className="display-4">NER</p>
            <form id = "form">
                <div>
                    <label htmlFor="message" className = "display-4">Message</label>
                    <textarea type="Message" rows = "10" id="message" className = "form-control rounded-0" onChange = {(e) => setMessage(e.target.value)}/>
                </div>
                <div>
                    <button onClick = {getNer()}type="submit" className="btn btn-dark btn-lg">Submit</button>
                </div>
            </form>
            <div>
                <label className="display-4">Entities</label>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "20">
                {result}
                </textarea>
            </div>
            <Footer/>
        </div>
    )
}