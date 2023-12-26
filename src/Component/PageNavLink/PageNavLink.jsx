import React from 'react'
import './pageNavLinh.css'
import { Link } from 'react-router-dom'
export default function PageNavLink() {
    return (
        <nav className="container-fluid pageNavLink" aria-label="breadcrumb" id="scrolvispilty">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/"> Home </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">My Account</li>
            </ol>
        </nav>
    )
}
