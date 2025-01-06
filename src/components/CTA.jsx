import { Link } from "react-router-dom"
import { socialLinks } from "../constants"
import { Ring } from "@react-three/drei"


const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Looking for a developer? <br className="sm:block hidden"/>
        Let's work together!</p>
        <div className="flex justify-center items-center flex-direction-row gap-4">
            {socialLinks.map((social) => (
                <a 
                    key={social.name} 
                    href={social.link}

                >
                    <img 
                        src={social.iconUrl} 
                        alt={`${social.name} icon`} 
                        style={{ width: '30px', height: '30px'}} 
                    />
                   
                </a>
            ))}
        </div>
        <Link to='/contact'className="btn">
        Contact Me
        </Link>
    </section>
  )
}

export default CTA