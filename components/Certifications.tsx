import React from 'react'

export default function Certifications() {
    const certificates = [
        {
          title: "AWS Educate – Introduction to Cloud 101",
          issuer: "Amazon Web Services (AWS)",
          year: "2026",
        },
      ];
  return (
    <section id="certificates" className="py-5">
      <div className="container py-5">
        <h2 className="fw-bold display-5 text-center mb-5">
          Certifications
        </h2>

        <div className="row justify-content-center">
          {certificates.map((cert) => (
            <div className="col-lg-6" key={cert.title}>
              <div className="card rounded-4 border-secondary shadow h-100">
                <div className="card-body">
                  <h4 className="text-dark fw-bold">
                    {cert.title}
                  </h4>

                  <p className="text-primary mb-1">
                    {cert.issuer}
                  </p>

                  <p className="text-muted">
                    Completed: {cert.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>)
}
