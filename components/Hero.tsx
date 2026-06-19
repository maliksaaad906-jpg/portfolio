import React from 'react'

export default function Hero() {
  return (
   <section className='bg-light py-5'>
     <div className="container py-5">
        <div className="row align-items-center min-vh-75">
            <div className="col-lg-7">
                <p className="text-primary fw-semibold mb-2">
                    Graduate Software Developer
                </p>
                <h1 className="text-dark display-4 fw-bold mb-3">
                Hi, I&apos;m Mohammad Saad
                </h1>
                <p className="lead text-muted mb-4">Computer Science graduate focused on building responsive web and
              mobile applications using React, Next.js, React Native,
              TypeScript, Firebase, and modern software engineering tools.</p>
              <div className="d-flex gap-3">
                <a href="#projects" className="btn btn-primary btn-lg">
                    View Projects
                </a>
                <a href="#contact" className="btn btn-outline-dark btn-lg">Contact Me</a>
              </div>
            </div>
            <div className="col-lg-5 text-center mt-5 mt-lg-0">
                <div className="p-4 bg-white rounded-4 shadow">
                    <h3 className="fw-bold text-dark">Frontend & Full-Stack</h3>
                    <p className="text-muted mb-0"> React • Next.js • TypeScript • Firebase • Node.js </p>
                </div>
            </div>
        </div>
     </div>
   </section>
  )
}
