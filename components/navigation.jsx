import React from "react";
import Link from "next/link";

function navigation(){
    return(
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">Index</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link active" aria-current="page" href="/home">Home</Link>
                  <Link className="nav-link" href="/about">About</Link>
                </div>
              </div>
            </div>
        </nav>
        </div>
    )
}
export default navigation;