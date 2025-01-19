import { certificates } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';


const Certificates = () => {
  return (
    
    <section className='max-container'>
    <h1 className='head-text'>My <span className='pink-to-red-gradient_text font-semibold drop-shadow'>Certificates</span></h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I've successfully completed multiple programming and web development courses covering topics 
        from basic programming principles to advanced JavaScript and frameworks like ReactJS and Angular.
        These certifications reflect my development and experience in front-end and back-end development, 
        giving me the skills to build dynamic and effective web applications.
        </p>
      </div>
    <div className='mt-12 flex'>
      <VerticalTimeline>
        {certificates.map((certificate) => (
          <VerticalTimelineElement
            key={certificate.name}
            date={certificate.date}
            iconStyle={{ background: certificate.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={certificate.icon}
                  alt={certificate.name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: certificate.iconBg,
              boxShadow: "none",
            }}
          >
            <div>
              <h3 >
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-xl font-poppins font-semibold"
                >
                  {certificate.name}</a>
              </h3>
            </div>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    <hr className="border-slate-200" />
      <CTA />
  </section>

  )
}

export default Certificates