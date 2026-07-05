"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";

export default function Home() {

  const projects = [
    {
      year: "2026",
      title: "Kinetic Elite GYM",
      description: "A modern, fully responsive fitness and gym website built with Next.js — featuring trainer showcases, class schedules, membership plans, and a seamless user experience for fitness businesses.",
      live: "https://gym-rho-neon.vercel.app/",
      github: "https://github.com/mina01khairy/GYM.git",
      tags: ["Next.js", "TypeScript", "context", "Tailwind"],
    },
    {
      year: "2026",
      title: "Mina Beta+",
      description: "A responsive wholesale electronics storefront built with Next.js — featuring product catalog management, cart functionality, and an intuitive shopping experience for enterprise buyers.",
      live: "https://beta-blond-five.vercel.app/",
      github: "https://github.com/mina01khairy/Beta-.git",
      tags: ["Next.js", "JavaScript", "Tailwind", "Math.js"],
    },
    {
      year: "2026",
      title: "Mina Store",
      description: "A responsive e-commerce application built with React, React Router, Context API, and Tailwind CSS —featuring product filtering, cart management, and API integration.",
      live: "https://mina-store-weld.vercel.app",
      github: "https://github.com/mina01khairy/Mina_Store.git",
      tags: ["React", "JavaScript", "API", "Context"],
    },
    {
      year: "2026",
      title: "Methods Numerical",
      description: "A responsive numerical methods application built with Next.js —featuring algorithm implementations, mathematical computations, and an intuitive learning experience for engineering students.",
      live: "https://methods-dusky.vercel.app",
      github: "https://github.com/mina01khairy/Methods.git",
      tags: ["Next.js", "JavaScript", "Tailwind", "Math.js"],
    },

  ];

  let Home = useRef(null)
  let About = useRef(null)
  let Projects = useRef(null)
  let Skills = useRef(null)
  let Contact = useRef(null)

  let HomeInView = useInView(Home, { amount: 0.6, })
  let AboutInView = useInView(About, { amount: 0.6, })
  let ProjectsInView = useInView(Projects, { amount: 0.6, })
  let SkillsInView = useInView(Skills, { amount: 0.6, })
  let ContactInView = useInView(Contact, { amount: 0.6, })

  const [ActiveSection, setActiveSection] = useState("Home");

  const [open, setopen] = useState();




  function getX1() {
    if (typeof window === 'undefined') return -550;
    if (window.innerWidth < 640) return -60;
    else if (window.innerWidth < 1024) return -350;
    else if (window.innerWidth < 1250) return -450;
    return -550;
  }

  function getX2() {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 640) return 0;
    else if (window.innerWidth < 1024) return 1;
    else if (window.innerWidth < 1250) return 1;
    return 1;
  }


  useEffect(() => {
    if (ContactInView) {
      setActiveSection("Contact");
    }
    else if (SkillsInView) {
      setActiveSection("Skills");
    }
    else if (ProjectsInView) {
      setActiveSection("Projects");
    }
    else if (AboutInView) {
      setActiveSection("About");
    }
    else if (HomeInView) {
      setActiveSection("Home");
    }
  }, [HomeInView, AboutInView, ProjectsInView, SkillsInView, ContactInView]);
  return (
    <>
      <ul className='text-black z-40 max-md:grid max-md:grid-cols-12 fixed top-0 left-0 right-0 bg-white flex justify-between items-center py-5 px-10 border-2 border-gray-200'>
        <li className='max-md:col-span-8 max-sm:col-span-5'>
          <button onClick={() => document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })} style={{ fontFamily: '"Playfair Display", serif' }} className=' font-bold text-base tracking-tight transition-opacity hover:opacity-60'>Mina</button>
        </li>

        <li className='max-md:hidden'>
          <ul className='flex gap-10'>
            <li>
              <button
                className={ActiveSection === 'About' ? "text-[#E8630A]" : ""}
                onClick={() => document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' })} >
                About
              </button>
            </li>
            <li>
              <button
                className={ActiveSection === 'Projects' ? "text-[#E8630A]" : ""}
                onClick={() => document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' })} >
                Projects
              </button>
            </li>

            <li>
              <button
                className={ActiveSection === 'Skills' ? "text-[#E8630A]" : ""}
                onClick={() => document.getElementById('Skills')?.scrollIntoView({ behavior: 'smooth' })} >
                Skills
              </button>
            </li>

            <li>
              <button
                className={ActiveSection === 'Contact' ? "text-[#E8630A]" : ""}
                onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })} >
                Contact
              </button>
            </li>

          </ul>
        </li>



        <div className={`z-50 absolute md:hidden top-0 right-0 ${open ? "translate-x-0" : "translate-x-full"} duration-300 w-6/12 grid grid-rows-12 justify-center text-black h-dvh bg-white`}>


          <button
            onClick={() => setopen(false)}
            className="flex flex-col justify-center gap-1 p-2 md:hidden"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>

            <span className={`w-6 h-0.5 bg-black transition-all ${open ? "opacity-0" : ""}`}></span>

            <span className={`w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>

          <li>
            <button
              className={ActiveSection === 'About' ? "text-[#E8630A]" : ""}
              onClick={() => document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' })} >
              About
            </button>
          </li>
          <li>
            <button
              className={ActiveSection === 'Projects' ? "text-[#E8630A]" : ""}
              onClick={() => document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' })} >
              Projects
            </button>
          </li>

          <li>
            <button
              className={ActiveSection === 'Skills' ? "text-[#E8630A]" : ""}
              onClick={() => document.getElementById('Skills')?.scrollIntoView({ behavior: 'smooth' })} >
              Skills
            </button>
          </li>

          <li>
            <button
              className={ActiveSection === 'Contact' ? "text-[#E8630A]" : ""}
              onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })} >
              Contact
            </button>
          </li>

        </div>

        <button onClick={() => { window.open("https://www.linkedin.com/in/mina-khairy-00-", "_blank"); }} className='max-sm:col-span-6 max-md:col-span-3 flex gap-3 items-center justify-center px-10 py-3 rounded-xl hover:bg-[#1d1d1d] bg-black text-white'>
          Linkedin
          <i className="fa-brands fa-linkedin text-2xl"></i>
        </button>

        <button
          onClick={() => setopen(true)}
          className="max-sm:col-span-1 flex flex-col justify-center gap-1 p-2 md:hidden"
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>

          <span className={`w-6 h-0.5 bg-black transition-all ${open ? "opacity-0" : ""}`}></span>

          <span className={`w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </ul>


      <div id='Home' ref={Home} className='grid grid-cols-12 md:h-dvh '>
        <div className='grid items-end col-span-6 max-md:col-span-12 max-md:h-dvh bg-white pb-16 pt-28 px-6 lg:px-12 overflow-hidden border border-gray-300'>
          <motion.div
            initial={{ y: 490, opacity: 0, }}
            whileInView={{ y: 0, opacity: 1, }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='text-xs uppercase tracking-[0.2em] mb-6  text-[#E8630A] font-mono'>Designer & Developer

            </div>
            <div className='text-9xl font-bold tracking-tight' style={{ fontFamily: '"Playfair Display", serif' }}>
              <div>
                <motion.div
                  animate={{
                    width: [120, 290, 120],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-black border-e-4 overflow-hidden"
                >
                  Mina
                </motion.div>
              </div>
              <div className='text-[#E8630A]'>
                Khairy.
              </div>
            </div>
            <div className='w-1/3'>
              <span className='text-gray-500'>
                Frontend Developer — turning designs into fast, smooth, and interactive web experiences.
              </span>
            </div>

            <div className='flex '>
              <button onClick={() => document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' })}
                className='hover:bg-[#ec813a] flex items-center py-3 px-6 mt-5 text-sm text-white bg-[#E8630A] rounded-xl'>
                View Work
                <i className="fa-solid fa-arrow-down ms-1 text-white" ></i>
              </button>


              <div>
                <button className='hover:text-[#000000] text-[#838383] flex items-center py-3 px-6 mt-5 text-sm underline underline-offset-4'
                  onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get in touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='text-xs grid items-end col-span-6 max-md:col-span-12  bg-black pb-16 pt-28 px-6 md:px-12 overflow-hidden'>
          <motion.div
            initial={{ x: getX1(), opacity: 0, }}
            whileInView={{ x: 0, opacity: 1, }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, delay: getX2() }}
          >
            <div className=' uppercase tracking-[0.2em] mb-6  text-gray-500 font-mono'>
              Currently available
            </div>
            <div className='flex items-end justify-between border-b-2 border-gray-700 pt-10  text-gray-400 '>
              <div>Years of experience</div>
              <div className='text-2xl text-[#E8630A]' style={{ fontFamily: '"Playfair Display", serif' }}>1+</div>
            </div>
            <div className='flex items-end justify-between border-b-2 border-gray-700 pt-15   text-gray-400 '>
              <div>Projects shipped</div>
              <div className='text-2xl text-[#E8630A]' style={{ fontFamily: '"Playfair Display", serif' }}>20+</div>
            </div>
            <div className='flex items-end text-3xl gap-3 py-10 text-gray-400 '>
              <button onClick={() => { window.open("https://github.com/mina01khairy", "_blank") }}>
                <i className="fa-brands fa-github hover:text-white" ></i>
              </button>
              <button onClick={() => { window.open("https://www.linkedin.com/in/mina-khairy-00-", "_blank") }}>
                <i className="fa-brands fa-linkedin hover:text-white" ></i>
              </button>
              <button onClick={() => { window.open("https://wa.me/201009618262", "_blank") }}>
                <i className="fa-brands fa-whatsapp hover:text-white" ></i>
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      <div ref={About} id='About' className='max-sm:px-5 flex max-sm:justigfy-center max-sm:grid gap-10 py-25 px-15 bg-white text-black'>
        <motion.div
          initial={{ y: 300, opacity: 0, }}
          whileInView={{ y: 0, opacity: 1, }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1 }}

          className=' max-sm:flex max-sm:justify-center z-20'><img className='max-w-md  max-sm:w-70 w-full overflow-hidden rounded-2xl' src="/img/Mina.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ x: getX1(), opacity: 0, }}
          whileInView={{ x: 0, opacity: 1, }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: getX2() }}
          className=' z-10'>
          <div className='text-xs uppercase tracking-[0.2em] mb-6  text-[#E8630A] font-mono'>
            01 - ABOUT
          </div>

          <div
            className='text-5xl font-bold tracking-tight' style={{ fontFamily: '"Playfair Display", serif' }}>

            Building at the intersection of <br /> design and code.
          </div>

          <div className='mt-10 text-sm text-gray-500'>

            I'm a frontend developer focused on building modern, responsive, and <br />
            user-focused web experiences. I enjoy transforming ideas into polished <br />
            digital products through clean code, thoughtful design, and attention to detail.
            <br /><br />


            Over the past few years, I've worked on a variety of projects ranging <br />
            from e-commerce platforms and portfolio websites to interactive web applications. <br />
            My focus is on building fast, accessible, and scalable interfaces using <br />
            modern technologies such as React, JavaScript, Tailwind CSS, and contemporary <br />
            frontend workflows. <br /><br />

            I believe great products are created when design and development work <br />
            together seamlessly. Whether I'm developing a user interface, optimizing <br />
            performance, or learning new technologies, I aim to create experiences <br />
            that are both visually appealing and highly functional. <br /><br />

            Beyond coding, I enjoy exploring UI/UX design, staying up to date with <br />
            frontend trends, and continuously improving my skills through building <br />
            real-world projects. <br /><br />
          </div>
          <div className='flex gap-10 mt-10 text-sm text-gray-500'>
            <div className='rounded-xl border border-gray-300 px-6 py-1'>Egypt</div>
            <div className='rounded-xl border border-gray-300 px-6 py-1'>Open to remote</div>
          </div>
        </motion.div>
      </div>

      <div ref={Projects} id='Projects' className='max-sm:px-2 text-white bg-[#0E0E0E] py-20 px-10'>
        <div className='text-xs uppercase tracking-[0.2em] mb-6  text-[#E8630A] font-mono'>
          02 - work
        </div>

        <div className='text-5xl  font-bold tracking-tight mb-16' style={{ fontFamily: '"Playfair Display", serif' }} >
          Selected projects
        </div>

        {projects.map((project) => (
          <div
            key={project.title}
            className='max-md:grid max-md:grid-cols-1 flex w-full justify-between border-t border-t-gray-700 group cursor-pointer'
            onClick={() => window.open(project.live, "_blank")}
          >
            <div className='max-md:group-hover:translate-x-0 md:w-[40%] max-md:gap-5 max-md:col-span-2 max-md:justify-center flex gap-20 items-center py-10 duration-300 group-hover:translate-x-10'>
              <div className='text-xs text-gray-500'>{project.year}</div>
              <div>
                <div className='group-hover:text-[#E8630A] text-2xl font-bold tracking-tight' style={{ fontFamily: '"Playfair Display", serif' }}>
                  {project.title}
                </div>
                <div className='text-xs text-gray-500'>{project.description}</div>
              </div>
            </div>

            <div className='max-md:gap-1 max-md:px-0 max-md:grid max-md:grid-cols-6 max-md:justify-center flex items-center gap-6 px-2'>
              <button className='z-10' onClick={(e) => { e.stopPropagation(); window.open(project.github, "_blank") }}>
                <i className="fa-brands text-gray-500 text-2xl fa-github hover:text-white"></i>
              </button>
              {project.tags.map((tag) => (
                <div key={tag} className='max-md:px-1 text-xs border px-3 rounded-2xl'>{tag}</div>
              ))}
              <div className='flex justify-center bg-gray-800 p-2 rounded-full group-hover:bg-[#E8630A]'>
                <i className='fa-solid fa-up-right-from-square text-white'></i>
              </div>
            </div>
          </div>
        ))}


      </div>

      <div ref={Skills} id='Skills' className='max-sm:px-5 text-black bg-white py-20 px-10'>
        <div className='text-xs uppercase tracking-[0.2em] mb-6  text-[#E8630A] font-mono'>
          03 - Skills
        </div>

        <div className='text-5xl  font-bold tracking-tight mb-16' style={{ fontFamily: '"Playfair Display", serif' }} >
          Tools & expertise
        </div>

        <div className='max-sm:gap-y-0 grid grid-cols-12 gap-5'>
          <div className='max-sm:col-span-6 col-span-3 border-e border-gray-400'>
            <div className=' flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>React</div>
            </div>
            <div className='flex  gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>Next.js</div>
            </div>
            <div className='flex  gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>Vue</div>
            </div>
          </div>

          <div className='max-sm:col-span-6 col-span-3 sm:border-e sm:border-gray-400'>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>Context</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>JavaScript</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>TypeScript</div>
            </div>
          </div>

          <div className='max-sm:col-span-6 col-span-3 border-e border-gray-400'>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>API</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>JQuery</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>Tailwind CSS</div>
            </div>
          </div>

          <div className='max-sm:col-span-6 col-span-3'>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>Figma</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div><div className='p-1 rounded-full bg-[#E8630A]'></div></div>
              <div>Bootstrap</div>
            </div>
          </div>

        </div>
      </div>

      <div ref={Contact} id='Contact' className='max-sm:px-5 text-white bg-[#0E0E0E] py-20 pb-5 px-10'>
        <div className='text-xs uppercase tracking-[0.2em] mb-6  text-[#E8630A] font-mono'>
          04 - Contact
        </div>

        <div className='text-5xl  font-bold tracking-tight mb-16' style={{ fontFamily: '"Playfair Display", serif' }} >
          Let's build something <br />
          worth remembering.
        </div>

        <div className='text-xs text-gray-500 '>
          I'm currently taking on select projects and full-time <br />
          opportunities. If your work is interesting, I'd love to hear about <br />
          it.
        </div>

        <div className='mt-15 mb-20  flex items-center gap-5 '>
          <button onClick={() => { window.open("mailto:mina01khairy@gmail.com", "_blank") }}
            className='px-6  py-4 bg-[#E8630A] rounded-2xl'><i className="fa-regular fa-envelope me-2 text-white" ></i>Mina@gmail</button>

          <div className='flex items-end text-3xl gap-3  text-gray-400 '>
            <button onClick={() => { window.open("https://github.com/mina01khairy", "_blank") }}>
              <i className="fa-brands fa-github hover:text-white" ></i>
            </button>
            <button onClick={() => { window.open("https://www.linkedin.com/in/mina-khairy-00-", "_blank") }}>
              <i className="fa-brands fa-linkedin hover:text-white" ></i>
            </button>
            <button onClick={() => { window.open("https://wa.me/201009618262", "_blank") }}>
              <i className="fa-brands fa-whatsapp hover:text-white" ></i>
            </button>
          </div>
        </div>

        <div className='flex justify-between text-[.60rem]  uppercase tracking-[0.2em]    font-mono  text-gray-500'>
          <div className=''>© 2025 Mina Khairy. All rights reserved.</div>
          <div>Designed & built with intention.</div>
        </div>

      </div>


    </>
  )
}

