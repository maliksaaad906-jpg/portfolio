import React from 'react'

export default function Projects() {
    const projects = [
        {
          title: "SKOPE – Remote Telescope Control & Scientific Observation Platform",
          type: "Frontend Lead | Group Project",
          tech: ["React", "JavaScript", "Bootstrap", "Django", "PostgreSQL"],
          description:
            "A web-based platform for remote scientific data capture and telescope control, allowing users to discover visible celestial objects, control telescope movement, and access live astronomical imagery.",
          points: [
            "Led frontend development as the sole frontend developer for the project.",
            "Built a dashboard displaying real-time visible celestial objects available for observation.",
            "Developed user interfaces allowing users to select astronomical targets and initiate observation workflows.",
            "Supported telescope slewing workflows, enabling the telescope to reposition toward selected celestial objects.",
            "Worked with Stellarium API and ASCOM Simulator to support object discovery, telescope control, and live imagery access.",
          ],
          github: "https://github.com/jashan-17/SKOPE",
          
        },
        {
          title: "STEMMLab – Mobile STEM Learning Application",
          type: "Development Lead | Group Project",
          tech: ["React Native", "Expo", "Firebase", "TypeScript"],
          description:
            "A cross-platform mobile application designed to support interactive STEM learning activities using mobile device features, cloud storage, and activity tracking.",
          points: [
            "Developed mobile screens for login, registration, activity details, history, map, and sensor-based features.",
            "Implemented Firebase Authentication and Firestore for user login, cloud data storage, and saved activity history.",
            "Integrated device capabilities including GPS location, accelerometer, gyroscope, and flashlight functionality.",
            "Built activity tracking and history management to allow users to save and review completed activities.",
            "Used Git and GitHub for version control and collaborated in a team-based software engineering workflow.",
          ],
          github: "https://github.com/maliksaaad906-jpg/STEMMLab",
          
        },
        {
          title: "Job Application Tracker",
          type: "Personal Project | Coming Soon",
          tech: ["Next.js", "Node.js", "Express", "PostgreSQL"],
          description:
            "A planned full-stack web application for tracking job applications, managing statuses, storing notes, and viewing application progress through dashboard analytics.",
          points: [
            "Will include user authentication, CRUD operations, filtering, and status tracking.",
            "Planned to strengthen full-stack development, REST API design, PostgreSQL, and deployment skills.",
          ],
          github: "#",
          
        },
      ];
  return (
    <section className="py-5" id="projects">
        <div className="container py-5">
            <h2 className="fw-bold display-5 text-center  mb-5">Projects</h2>
            <div className="row g-4">
                {projects.map((project)=> (
                    <div className="col-lg-4" key={project.title}>
                        <div className="card rounded-5 bg-light border-secondary h-100 shadow">
                            <div className="card-body p-4">
                                <p className="text-primary fw-semibold mb-2">{project.type}</p>
                                <h4 className="fw-bold text-dark">{project.title}</h4>
                                <p className="lead text-dark mt-3">{project.description}</p>
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((item)=> (
                                        <span className="badge bg-primary" key={item}>{item}</span>
                                    ))}
                                </div>
                                <ul className="text-dark small">
                                    {project.points.map((point)=>(
                                        <li className="mb-2 " key={point}>{point}</li>

                                    ))}

                                </ul>
                                <div className="d-flex gap-2 mt-4">
                                    <a href={project.github} className="btn btn-outline-light btn-sm" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
