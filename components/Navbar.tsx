export default function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a href="#" className="navbar-brand fw-bold">
                    Mohammad Saad
                </a>
                <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"
                id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#certificates" className="nav-link">Certificates</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <a href="/resume.pdf" className="custom-btn">Get Resume</a>
                </div>
            </div>
        </nav>
    )
}