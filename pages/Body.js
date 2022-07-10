import styles from '../styles/Body.module.css'
import {useForm} from 'react-hook-form'
import { useState } from 'react';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/messages')
    const data = await res.json();

    return {
        props: {data}
    }
}

export default function Body({data}) {
        return (
        <section className = "container p-1 back" key = "body" id = "body">
            <form id = "form">
            <div className={styles.cypher}>
                <label className="h1" htmlFor="cypher">Cypher</label>
                <select className="form-select" aria-label=".form-select-lg example" id="inlineFormCustomSelectPref" defaultValue="selected">
                    <option value="selected">Choose ...</option>
                    <option value="1">Cypher 1</option>
                    <option value="2">Cypher 2</option>
                    <option value="3">Cypher 3</option>
                </select>
            </div>
            <div className={styles.side_padding}>
                <label htmlFor="message" className = "h1">Text</label>
                <textarea type="Message" rows = "10" id="message" placeholder="Enter a message" className = "form-control rounded-0"/>
            </div>
            <div className={styles.side_padding}>
                <button type="submit" className="btn btn-dark btn-lg">Submit</button>
            </div>
            </form>
            <div className={styles.side_padding}>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "10" id = "output">
                    {data.id}
                </textarea>
            </div>
        </section>
    );
}