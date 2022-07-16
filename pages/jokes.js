import NavBar from "./navbar";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";

export default function dadJokes() {
    const [setup, setSetup] = useState("");
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
            setSetup(response.data[0].joke)
            // setDelivery(response.data.content)  
            console.log(response.data[0].joke);
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
                {/* <p className="text-center h3">Wanna hear a funny joke</p> */}
                <button onClick = {() => getJoke()} className = "btn btn-dark btn-lg mt-4">Hear a fun joke</button>
                <div className="row">
                    <div className="col-2"/>
                    <div className="col-8">
                        <textarea readOnly type = "Output" className = "form-control rounder-0 mt-2 h4" rows = "15" value = {setup}/>

                    </div>
                    <div className="col-2"/>
                </div>
                {/* <div className="row">
                    <div className="col-2"/>
                    <div className="col-8">
                        <textarea readOnly type = "Output" className = "form-control rounder-0 mt-2 h4" rows = "4" value = {delivery}/>
                    </div>
                    <div className="col-2"/>
                </div> */}
            </div>
            <Footer/>
        </div>
    )
}