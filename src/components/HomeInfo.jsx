import { Link } from "react-router-dom";
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain ' />
        </Link>
    </div>

)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 bottom-10'>
            Hi, I'm
            <span className='font-semibold mx-2 text-white'>Beatris Ivanova</span>👋
        </h1>
    ),
    2: (
        <InfoBox
            text='Junior software developer with a desire to apply my knowledge professionally.'
            link='/about'
            btnText='Learn More'
        />
    ),
    3: (
        <InfoBox
            text='Projects I have worked on. Check them out!'
            link='/projects'
            btnText='My portfolio'
        />
    ),
    4: (
        <InfoBox
            text='You want to see my education?'
            link='/certificates'
            btnText="Come here"
        />
    )
   
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo