import React, { Component } from 'react';
import '../styles/pageStyles/savePrayer.scss'
import '../styles/pageStyles/savePrayer.scss'
import {Link} from "react-router-dom";
import axios from 'axios';

class savePrayer extends Component {
    state ={
        catagoryValid: true,
        prayerInput: true,
    }

    render() {
        const handleSave = e =>{
            axios.post ('http://localhost:8080/savePrayers', {
                catagory: e.target.catagory.value,
                prayerInput: e.target.prayerInput.value,
            })
            .then((response) => {console.log(response) })
            .catch(err => {alert ("Error when saving prayer.");
        })
        };
        const validation = e =>{
            e.preventDefault();

            let catagoryValid = true;
            if (e.target.catagory.value === ""){
                catagoryValid = false;
            }
            let prayerInput = true;
            if (e.target.prayerInput.value === ""){
                prayerInput = false;
            }

         const validation = [catagoryValid, prayerInput]  
         
         function CheckValidation(validation){
             return validation === false
         }
         if (validation.find(CheckValidation) === undefined){
                handleSave(e)
                .catch(err => {alert ("Error when saving Prayer.");
                console.log(err)});
         }
                this.setState({
                    catagoryValid,
                    prayerInput,
                })
         this.handleSave(e);      
        }
        return (
            <div className="prayer">
                <form onClick={this.handleSave} className="prayer__form">
                    <label className="prayer__label">Catagory</label>
                    <input className="prayer__input" type="text" name="catagory"></input>
                    <label className="prayer__label">Insert text here</label>
                    <textarea className="prayer__input prayer__text" type="text" name="prayerInput"></textarea>
                    <div className="prayer__form--buttons">
                        <button> Save Prayer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default savePrayer;