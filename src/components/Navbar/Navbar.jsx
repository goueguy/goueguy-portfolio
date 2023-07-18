import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mt-4">
        <div className="container-fluid mx-auto" id='hamburger-icon'>
            <Logo/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white active" aria-current="page" href="#">ACCUEIL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">EXPERIENCES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">PROJETS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">CONTACTEZ MOI</a>
                    </li>
                </ul>
                <Button className="btn btn-primary btn-download">TELECHARGER CV</Button>
            </div>
        </div>
    </nav>
  )
}
