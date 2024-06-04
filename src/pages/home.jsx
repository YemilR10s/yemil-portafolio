       /* styles css */
import "../styles/home.css"
       /* Typewriter */
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const Home = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer'],
        loop: {},
        typeSpeed: 120
      })
  return (
    <>
    <div className="home-container">
        <div className="home-content">
            <div className="home-text">
                <h3>Hey, I'am Yemil 👋</h3>
                <h1> {text} <Cursor cursorStyle="<"/></h1>
                <p>Soy un desarrollador autodidacta con una pasión por aprender y crecer constantemente. Me encantan proyectos desafiantes que me permiten mejorar mis habilidades.⚡</p>
                <div className="buttons">
                    <button>Get In Touch</button>
                    <button>Browse Projects</button>
                </div>
            </div>
            <div className="home-img-content">
                <div className="img-border">
                   {/*  <img src={yemil} alt="yemil" /> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
