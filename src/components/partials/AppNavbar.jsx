import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function AppNavbar() {

    const screenName = useSelector(state => state.weatherReducer.screenName);

    const location = useLocation();
    const history = useHistory();

    return (
        <div className="navbar">
            {location.pathname !== "/"
                ?
                <span
                    className="arrow-back-icon"
                    onClick={() => { history.goBack() }}
                >
                    <i className="small material-icons">arrow_back</i>
                </span>
                :
                <span></span>
            }
            {location.pathname !== "/"
                ?
                <span className="screen-name">{screenName}</span>
                :
                <span></span>
            }
            {location.pathname !== "/about"
                ?
                <Link to="/settings" className="settings-icon">
                    <span>
                        <i className="small material-icons">settings</i>
                    </span>
                </Link>
                :
                <span style={{width: "44px"}}></span>
            }
        </div>
    )
}
