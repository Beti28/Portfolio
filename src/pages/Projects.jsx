import { projects } from "../constants"
import CTA from '../components/CTA';
import { certificates } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Projects = () => {
  return (
    <section >
      <div className='max-container-project'>
        <h1 className='head-text'>My <span className='pink-to-red-gradient_text font-semibold drop-shadow'>Projects</span></h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>These projects, developed as part of my coursework at SoftUni, are online
            stores where users can browse, add and manage products.
            It demonstrates my skills with a focus on dynamic user interfaces and CRUD
            operations.</p>
        </div>
        <div className="flex flex-col my-8 gap-20">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12 ">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl ">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 mt-3 ml-3"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2x1 font-poppins font-semibold">{project.name}</h4>
                <p className="mt-2 text-slate-500">
                  {project.description}
                </p>
                <div className="mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <img
                      src={project.screenshotUrl}
                      alt={`${project.name} Screenshot`}
                      className="rounded-xl w-full object-cover hover:scale-105 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='max-container-project2'>
        <h1 className='head-text'>My <span className='pink-to-red-gradient_text font-semibold drop-shadow'>Certificates</span></h1>
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
      </div>



      <hr className="border-slate-200" />
      <CTA />

    </section>

  )
}

export default Projects