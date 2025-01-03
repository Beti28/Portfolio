import { Link } from "react-router-dom"


const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Looking for a developer? <br className="sm:block hidden"/>
        Let's work together!</p>
        <Link to='/contact' className="btn">
        Contact Me
        </Link>
    </section>
  )
}

export default CTA