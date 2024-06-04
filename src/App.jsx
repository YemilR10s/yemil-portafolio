/************COMPONENTS**********/
import { Navbar } from "./pages/navbar"
/************ TRANSLATION FILES ***********/ 
import EnNavbar from "../locales/english/EnNavbar.json"
import EsNavbar from "../locales/espanish/EsNavbar.json"


/* Translation settings*/
import i18n from "i18next";
import {initReactI18next} from "react-i18next"
import { Home } from "./pages/home";
i18n
  .use(initReactI18next)
  .init({
  resources: {
    en: {
      translation: {
        ...EnNavbar
      }
    },
    es:{
      translation:{
        ...EsNavbar

      }
    }
  },
  lng: "en", // language default
    fallbackLng: "en", // Fallback language Define el idioma de reserva que se utilizará si la traducción para el idioma actual no está disponible.
    interpolation: {
      escapeValue: false //// React already escapes by default
    },
    returnObjects: true 
  })
;



function App() {
 

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
