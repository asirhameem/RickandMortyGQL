import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li>Location</li>
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <Link to="/" className="navbar-brand mx-auto"> Welcome to Planet of Rick and Morty  </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li>Location</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
