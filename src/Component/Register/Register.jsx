import React from 'react'
import PageNavLink from '../PageNavLink/PageNavLink.jsx'
import SignUp from './SignUp.jsx'
import LogInSection from './LogInSection.jsx'

export default function Register({getCurentUser}) {
    return (
        <>
            <PageNavLink pageName={"My Account"}/>
            <section className="main-section">
                <div className="container-fluid">
                    <div className="row  m-1 m-lg-5">
                        <LogInSection getCurentUser={getCurentUser}/>
                        <SignUp />
                    </div>
                </div>
            </section>
        </>
    )
}
