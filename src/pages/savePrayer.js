//conver this doc to function based component

import React, { Component } from 'react';
import '../styles/pageStyles/savePrayer.scss'
import PostRequest from '../api'

class savePrayer extends Component {
    state ={
        categoryValid: true,
        prayerInput: true,
    }

    render() {
         
        const handleSave = e =>{
            e.preventDefault();
            console.log("hahah")
            PostRequest(e.target.category.value,
                        e.target.prayerInput.value,
                        e.target.scriptures.value.split(',').map((scripture) => scripture.trim()));
                        
        };
        const validation = e =>{
            e.preventDefault();

            let categoryValid = true;
            if (e.target.category.value === ""){
                categoryValid = false;
            }
            let prayerInput = true;
            if (e.target.prayerInput.value === ""){
                prayerInput = false;
            }

         const validation = [categoryValid, prayerInput]  
         
         function CheckValidation(validation){
             return validation === false
         }
         if (validation.find(CheckValidation) === undefined){
                handleSave(e)
                .catch(err => {alert ("Error when saving Prayer.");
                console.log(err)});
         }
                this.setState({
                    categoryValid,
                    prayerInput,
                })
         this.handleSave(e);      
        }
        return (
            <div className="prayer">
                <form onSubmit={handleSave} className="prayer__form">
                    <label className="prayer__label">Category</label>
                    <input className="prayer__input" type="text" name="category"></input>
                    <label className="prayer__label">Insert text here</label>
                    <textarea className="prayer__input prayer__text" type="text" name="prayerInput"></textarea>
                    <label className="prayer__label">Scriptures</label>
                    <input className="prayer__input" type="text" name="scriptures"></input>
                    <div className="prayer__form--buttons">
                        <button type="submit"> Save Prayer</button> 
                    </div>
                </form>
            </div>
        );
    }
}

export default savePrayer;