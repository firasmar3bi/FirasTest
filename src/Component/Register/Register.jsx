import React from 'react'
import PageNavLink from '../PageNavLink/PageNavLink'
import Input from './Input'
import SignUp from './SignUp'
import LogInSection from './LogInSection'

export default function Register() {
    return (
        <>
            <PageNavLink />
            <section className="main-section">
                <div className="container-fluid">
                    <div className="row  m-1 m-lg-5">
                        <LogInSection />
                        <SignUp />
                    </div>
                </div>
            </section>
        </>
    )
}
