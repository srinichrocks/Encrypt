import Footer from "./footer";
import NavBar from "./navbar";

export default function sentiment(){
    return(
        <div>
            <NavBar/>
            <p className="display-1">Language Detection here</p>
            <form id = "form">
                <div>
                    <label htmlFor="message" className = "h1">Text</label>
                    <textarea type="Message" rows = "10" id="message" className = "form-control rounded-0"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                </div>
            </form>
            <div>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "10" id = "output"/>
            </div>
            <Footer/>
        </div>
    )
}