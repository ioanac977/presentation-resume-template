// import React from 'react';
// import {createStore} from 'redux';
// import {Link} from "react-router-dom";
// import {Navigation} from "react-mdl";
//
//
// const translations = {
//     'en': {
//         'text1': 'Choose your language:',
//         'text2': 'Language',
//         'text3': 'Home'
//     },
//     'tr': {
//         'text1': 'Dil Seçiniz:',
//         'text2': 'Türkçe',
//         'text3': 'Acasa'
//     }
// }
//
// //get transition from
//
// const getTranslation = (lang, text) => {
//     return translations[lang][text];
// }
//
// //Combined reducer
//
// const allLanguages = [
//     {code: 'en', name: 'English'},
//     {code: 'tr', name: 'Türkçe'}
// ]
//
// //actions
//
// const languages = (state = 'en', action) => {
//     switch (action.type) {
//         case 'CHANGE_LANGUAGE':
//             return action.language;
//         default:
//             return state;
//     }
// };
//
//
// const store = createStore(languages);
//
//
// const LanguageSelector = () => {
//     const options = allLanguages.map(language => {
//         return <option value={language.code}>{language.name}</option>
//     });
//
//     return (
//         <select
//             onChange={(e) => {
//                 store.dispatch({
//                     type: 'CHANGE_LANGUAGE',
//                     language: e.target.value
//                 })
//             }}
//         >
//             {options}
//         </select>
//     );
// }
//
// export default class LanguageSwitcher extends React.Component {
//
//     componentDidMount() {
//         store.subscribe(() => this.forceUpdate());
//     }
//
//     render() {
//         return (
//             <div>
//                 <p1>
//                     {getTranslation(
//                         store.getState(),
//                         'text1',
//                     )}
//                     <LanguageSelector/>
//                 </p1>
//                 {/*<Link to="/acasa">*/}
//                 {/*    {getTranslation(*/}
//                 {/*        store.getState(),*/}
//                 {/*        'text3',*/}
//
//                 {/*    )}</Link>*/}
//                 {/*<Link to="/noutati">Noutati</Link>*/}
//                 {/*<Link to="/despre">Despre</Link>*/}
//                 {/*<Link to="/profil">Profil</Link>*/}
//                 {/*<Link to="/coordonator">Coordonator</Link>*/}
//                 {/*<Link to="/contact">Contact</Link>*/}
//
//             </div>
//         );
//     }
// };
