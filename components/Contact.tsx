import React from 'react'

export default function Contact() {
  return (
    <section className="py-5" id= "contact">
        <div className="container py-5">
            <h2 className="fw-bold display-5 text-center mb-5">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card  rounded-5 bg-light border-secondary shadow">
                        <div className="card-body  p-5 text-center">
                            <h4 className="text-dark mb-4">
                                Let's Connect
                            </h4>
                            <p className="text-dark">
                            📧 maliksaaad906@gmail.com
                            </p>
                            <p className="text-dark">
                            📍 Melbourne, Australia
                            </p>
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <a href="https://github.com/maliksaaad906-jpg" className="custom-btn-outline">GitHub</a>
                                <a href="www.linkedin.com/in/mohammad-saad-0a81ab203" className="custom-btn">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
