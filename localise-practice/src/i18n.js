// import i18n from 'i18next'
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import { initReactI18next } from 'react-i18next'


// i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
//     fallbackLng: 'en',
//     debug: true,
//     detection: {
//         order: ['queryString','cookie'],
//         cache: ['cookie']
//     },
//     interpolation: {
//         escapeValue: false
//     }
// })

// export default i18n



import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import jp from "./locales/jp/translation.json"
import en from "./locales/en/translation.json"


const resources = {
	jp: {
		translation: jp
	},
	en: {
		translation: en
},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		// debug: true,
		fallbackLng: "en",
		lng: "en",

		// setting key and namespace separators to false, so that keys can just be the fallback text in english
		keySeparator: false, // we do not use keys in form messages.welcome
		namespaceSeparator: false,

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	})


export default i18n

