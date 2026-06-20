import React from 'react'
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaAws,
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiBootstrap,
    SiExpress,
    SiDjango,
    SiFirebase,
    SiPostgresql,
    SiMongodb,
    SiMysql,
  } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
          title: "Frontend",
          items: [
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
          ],
        },
        {
          title: "Backend",
          items: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Firebase", icon: <SiFirebase /> },
          ],
        },
        {
          title: "Databases",
          items: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
          ],
        },
        {
          title: "Tools",
          items: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "AWS", icon: <FaAws /> },
          ],
        },
      ];
  return (
    <section className="py-5" id="skills">
        <div className="container py-5">
            <h2 className="section-title display-5 text-center mb-5">Technical Skills</h2>
            <div className="row g-4">
                {skills.map((skill)=>(
                    <div className="col-md-6 col-lg-3" key={skill.title}>
                    <div className='card custom-card rounded-5 bg-light border-secondary h-100 shadow'>
                    <div className='card-body'>
                        <h5 className="card-title text-light fw-bold ">{skill.title}</h5>
                        <ul className="list-unstyled mt-3 mb-0">
                            {skill.items.map((item)=> (<li className=' text-light mb-3 d-flex align-item-center gap-2' key= {item.name}><span className ="badge-tech"style ={{fontSize : "1.2rem"}}>{item.icon}</span>{item.name}</li>))}
                        </ul>
                    </div>
                    </div>
                </div>))}
            </div>
        </div>
    </section>
  )
}
