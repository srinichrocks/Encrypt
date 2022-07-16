import NavBar from "./navbar";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";


export default function dadJokes() {
    const [joke, setJoke] = useState("");
    const [delivery, setDelivery] = useState("");

    async function getJoke(){
        const options = {
            method: 'GET',
            url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
            headers: {
              'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
              'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            setJoke(response.data[0].joke)
            // console.log(response.data[0].joke);
          }).catch(function (error) {
              console.error(error);
          });
    }

    return(
        <div>
            <NavBar/>
            <div className="text-center justify-content-center">
                <p className="h1 mt-2">Jokes</p>
                <hr/>
                <button onClick = {() => getJoke()} className = "btn btn-dark btn-lg mt-4">Click to hear a funny joke</button>
                <div className="row">
                    <div className="col-2"/>
                    <div className="col-8">
                        <textarea readOnly type = "Output" className = "form-control rounder-0 mt-2 h4" rows = "13" value = {joke}/>
                    </div>
                    <div className="col-2"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}