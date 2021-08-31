import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link to="/" className="navbar-brand"> Welcome to Planet of Rick and Morty  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/locations" className="nav-link active">Locations</Link>
                        <Link to="/episodes" className="nav-link active">Episodes</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
