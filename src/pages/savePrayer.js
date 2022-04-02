import React, { Component } from 'react';
import '../styles/pageStyles/savePrayer.scss'

class savePrayer extends Component {
    render() {
        return (
            <div className="prayer">
                <form className="prayer__form">
                    <label className="prayer__catagory">Catagory</label>
                    <textarea></textarea>
                    <label>Insert text here</label>
                    <textarea></textarea>
                </form>
            </div>
        );
    }
}

export default savePrayer;