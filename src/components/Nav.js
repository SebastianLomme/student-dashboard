import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#Home">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-evenly flex-grow-1">
                        <a className="nav-link  active" aria-current="page" href="#Home">Home</a>
                        <a className="nav-link" href="#Features">Features</a>
                        <a className="nav-link" href="#Pricing">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav