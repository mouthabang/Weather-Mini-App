import en from '/i18n/en';
import st from '/i18n/st';

const app = getApp();

/**
* Load language code translation dictionary
* @param languageCode {String} Language code eg. pt, en...
* @example
* loadLanguage(languageCode)
*/
function loadLanguage(lang) {
  let langDictionary, languageCode = lang.toLowerCase();

  switch (languageCode) {
    case 'st':
      langDictionary = st;
      break; 
    
    case 'en':
      langDictionary = en;
      break; 
   
    default:
      languageCode = 'en';
      langDictionary = en;
      break;
  }
  app.setLanguage(languageCode, langDictionary);
}

export { loadLanguage }