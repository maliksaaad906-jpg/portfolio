import React from 'react'

export default function About() {
  return (
    <section className="py-5" id="about">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="fw-bold mb-4">About Me</h2>
                    <p className="lead text-light">
                    I am a Computer Science graduate from La Trobe University with
                    hands-on experience building web and mobile applications.
                    </p>
                    <p className="text-light">My experience includes leading frontend development for a remote
              telescope control platform and developing cross-platform mobile
              applications using React Native, Expo, and Firebase.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
