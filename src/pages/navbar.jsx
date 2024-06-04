            /* Styles css */
import "../styles/navbar.css"
            /* HOOKS */
import { useState } from "react"
           /* TRANSLATION */
import {useTranslation} from "react-i18next"



export const Navbar = () => {
                /* Show and hide menu */
    const [showMenu, setShowMenu] = useState(true)
    const menuToggle = ()=>{
        setShowMenu(!showMenu)
    }
                /* i18next translation  */
    const { t, i18n} = useTranslation();
    const changeLanguage = (language)=>{
        i18n.changeLanguage(language)
    }
    


  return (
    <>
    
    <div className="navbar-container">

        <div className={ 
                        showMenu ? "navbar-content" : 
                        "navbar-content active"}>

            {/* logo */}
            <div className="logo">
                <span>R10s</span>
            </div>

            {/* Ul Items content  */}
            <ul className="items-container">
                <li><a href="#home">{t("home")}</a></li>
                <li><a href="#Projects">{t("Projects")}</a></li>
                <li><a href="#contact">{t("contact")}</a></li>
            </ul>
            <div 
                onClick={menuToggle}
                className="hamburger-menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {/* LANGUAGE */}
            <select 
                onChange={(e)=>{
                   changeLanguage(e.target.value) 
                }}  
                className="Language-button">
                <option value="en" type="button">En</option>
                <option value="es" type="button">Es</option>
            </select>
        </div>
    </div>
    
    </>
  )
}
