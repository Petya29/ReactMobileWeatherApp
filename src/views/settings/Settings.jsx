import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import AppLogo from '../../components/partials/AppLogo';
import TemperatureSwitcher from '../../components/settings/TemperatureSwitcher';
import WindSpeedSwitcher from '../../components/settings/WindSpeedSwitcher';
import LanguageSwitcher from '../../components/settings/LanguageSwitcher';

export default function Settings() {

    const [collectionsHeight, setCollectionsHeight] = useState('auto');

    useEffect(() => {
        M.AutoInit();

        const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, { coverTrigger: true });

        const collectionAutoHeight = document.getElementById("collection").clientHeight + 50;
        setCollectionsHeight(collectionAutoHeight);
    }, []);

    return (
        <div className="settings">
            <div className="settings-header center-align">
                <h2><AppLogo /></h2>
                <span>Version {process.env.REACT_APP_VERSION}</span>
            </div>
            <ul id="collection" className="collection settings-list" style={{ height: collectionsHeight }}>
                <li className="collection-item">
                    <div className="collection-item-wrap">
                        <LanguageSwitcher />
                    </div>
                </li>
                <li className="collection-item">
                    <div className="collection-item-wrap">
                        <TemperatureSwitcher />
                    </div>
                </li>
                <li className="collection-item">
                    <div className="collection-item-wrap">
                        <WindSpeedSwitcher />
                    </div>
                </li>
            </ul>
            <ul className="collection settings-list">
                <li className="collection-item">
                    <Link to="/about">
                        <div className="collection-item-wrap">
                            <div>About App</div>
                            <div><i className="material-icons">arrow_forward</i></div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
