import React from 'react';
import Styles from './Signup.module.css';
import logotop from '../Images/logo-honest.png';
import { FaPlay } from "react-icons/fa";

export default function Signup() {
    return (
        <div className={Styles.parent_signup_con}>
            <div className={Styles.signup_card}>
                <img src={logotop} /><br />
                <span style={{ fontWeight: 'lighter', fontSize: '1.6rem' }}>Create an account</span><br /><br />

                <form>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <div style={{ width: '50%' }}>
                            <label htmlFor='Fullname'>Full name</label><br />
                            <input id="Fullname" placeholder='Enter your full name. E.g., Bruce' type="text" autoCapitalize='off' autoCorrect='off' autoComplete='nope'
                                style={{ width: '100%', borderRadius: '10px', border: '0.1px solid grey', padding: 17, outline: 'none', fontSize: '1rem', marginTop: 5 }} />
                        </div>

                        <div style={{ width: '50%' }}>
                            <label htmlFor="company_name">Company name</label><br />
                            <input id="company_name" placeholder='Enter your compnay name. E.g.,' type="email" autoCapitalize='off' autoComplete='off' style={{ width: '100%', padding: 17, outline: 'none', borderRadius: '10px', border: '0.1px solid grey', fontSize: '1rem', marginTop: 5 }} />
                        </div>

                    </div><br />

                    <label htmlFor='workemail'>Work email</label>
                    <input id="workemail" placeholder='Enter your work email adress. E.g.,bruce@wayne.enterprises' type="text" autoCapitalize='off' autoComplete='off' style={{ width: '100%', padding: 17, outline: 'none', borderRadius: '10px', border: '0.1px solid grey', fontSize: '1rem', marginTop: 5 }} /> <br /><br />

                    <label htmlFor='password'>Password</label>
                    <input id="password" placeholder='Password' type="text" autoCapitalize='off' autoComplete='off' style={{ width: '100%', padding: 17, outline: 'none', borderRadius: '10px', border: '0.1px solid grey', fontSize: '1rem', marginTop: 5 }} /> <br /><br />


                    <button type="submit" style={{ fontSize: '1rem', width: '100%', padding: '1rem', color: 'white', backgroundColor: '#18987a', border: '1px', borderRadius: '10px' }}> Create account <FaPlay size={15} style={{ marginLeft: 10, position: 'relative', top: 2 }} /> </button>

                </form>


                <br />

                <span>By creating an account, you agree to our T & C and Privacy policy</span> <br />

                <div style={{ marginTop: 10 }}>
                    <span>Already have an account? <span style={{ color: '#00A884' }}> Login to Honesti Campaign  </span> </span>
                </div>


            </div>
        </div>
    )
}   