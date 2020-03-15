import {translations} from "./translations"

// eslint-disable-next-line
let getTranslation;
export default  getTranslation = (lang, text) => {
    return translations[lang][text];
}
