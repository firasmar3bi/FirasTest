import React from 'react'
import './pageNavLinh.css'
export default function PageNavLink() {
    return (
        <nav className="container-fluid pageNavLink" aria-label="breadcrumb" id="scrolvispilty">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">My Account</li>
            </ol>
        </nav>
    )
}
