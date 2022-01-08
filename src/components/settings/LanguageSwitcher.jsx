import React, { Fragment } from 'react'

export default function LanguageSwitcher() {
    return (
        <Fragment>
            <div>Language</div>
            <select className="language-select" defaultValue={1}>
                <option value="1">English</option>
                <option value="2" disabled>Polish</option>
                <option value="3" disabled>Russian</option>
            </select>
        </Fragment>
    )
}
