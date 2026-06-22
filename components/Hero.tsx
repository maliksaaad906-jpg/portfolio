import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
   <section className='prm-bg py-5'>
     <div className="container py-5">
        <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
                <h5 className="text-primary fw-semibold mb-2">
                    Graduate Software Developer
                </h5>
                <h1 className="text-dark display-3 fw-bold mb-3">
                Hi, I&apos;m Mohammad Saad
                </h1>
                <p className="lead text-dark mb-4">Computer Science graduate focused on building responsive web and
              mobile applications using React, Next.js, React Native,
              TypeScript, Firebase, and modern software engineering tools.</p>
              <div className="d-flex gap-3 ">
                <a href="#projects" className="custom-btn scnd-btn">
                    View Projects
                </a>
                <a href="/resume.pdf" className="custom-btn-outline">Get Resume</a>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <Image
              src="/images/avatar.png"
              alt="Mohammad Saad"
              width={400}
              height={400}
              className="hero-avatar img-fluid"
            />
            </div>
        </div>
     </div>
   </section>
  )
}
