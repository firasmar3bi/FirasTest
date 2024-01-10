import React from 'react'
import './pageNavLinh.css'
import { Link } from 'react-router-dom'
export default function PageNavLink({pageName , subPage}) {
    return (
        <nav className="container-fluid pageNavLink" aria-label="breadcrumb" id="scrolvispilty">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/"> Home </Link>
                </li>
                {subPage? 
                <li className="breadcrumb-item active" aria-current="page">
                <Link to={`/${subPage}`}> {subPage} </Link></li>
                : ''}
                <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
            </ol>
        </nav>
    )
}
