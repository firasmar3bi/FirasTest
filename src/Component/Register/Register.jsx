import React from 'react'
import PageNavLink from '../PageNavLink/PageNavLink'
import SignUp from './SignUp'
import LogInSection from './LogInSection'

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
