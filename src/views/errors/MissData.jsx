import React from 'react';
import { Link } from 'react-router-dom';

export default function MissData() {
    return (
        <div className="miss-data-page">
            <div className="center-align">
                <i className='large material-icons err-icon'>error_outline</i>
                <h3>Something went wrong!</h3>
                <br /><br />
                <Link to="/">
                    <button className="btn waves-effect waves-light" type="button">
                        <i className="material-icons left">arrow_back</i>
                        Search cities
                    </button>
                </Link>
            </div>
        </div>
    )
}
