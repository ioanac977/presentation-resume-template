import React from "react";
// import {Store as store} from "redux";
import {allLanguages} from "./allLanguages";
import {store} from './store';

export const LanguageSelector = () => {
    const options = allLanguages.map(language => {
        return <option value={language.code}>{language.name}</option>
    });

    return (
        <select
            onChange={(e) => {
                localStorage.setItem('optiuneFavorita', options.name);
                store.dispatch({
                    type: 'CHANGE_LANGUAGE',
                    language: e.target.value
                })
            }}

        >
            {options}

        </select>
    );
}