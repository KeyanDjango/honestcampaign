import React, { useEffect, useState } from 'react';
import Styles from './Login.module.css';
import logotop from '../Images/logo-honest.png';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[isCheck,setCheck] = useState(false);

    useEffect(() => {
        const isValidEmail = email.trim() !== '';
        const isValidPassword = password.trim() !== '';
        setCheck(isValidEmail && isValidPassword);
    }, [email, password]);

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleSubmit (event){
          event.preventDefault();
          if(emailRegex.test(email)){

          }
          else{
            toast.error('Correct Email format is required!',{
                position:'top-right',
                autoClose:5000,
                pauseOnHover:false,
            })
          }
    }
    
    return (
        <div className={Styles.parent_signup_con}>
            <div className={Styles.signup_card_con}>
                <ToastContainer/>
                <img src={logotop} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <h1 style={{ textAlign: 'center', fontWeight: 'lighter' }}> Login to Honesti CRM </h1>
                <h5 style={{ marginTop: 10, marginBottom: 15, textAlign: 'center', fontWeight: 'lighter' }}>Or  <NavLink to='/signup' style={{ color: '#18987a', textDecoration: 'none' }}> create a new account </NavLink> </h5>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email_input'>Email</label> <br />
                    <input placeholder='example@companyname.com' id="email_input" autoComplete='off' autoCorrect='off' type="text" className={Styles.email_input} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password_input">Password</label>
                    <NavLink to='' style={{ float: 'right', color: '#18987a', textDecoration: 'none' }}> Forget your password? </NavLink>

                    <input  placeholder='Password' id="password_input" autoComplete='off' autoCorrect='off' type="password" className={Styles.email_input} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" disabled={isCheck ? false : true}  className={Styles.loginbtn} style={{backgroundColor:isCheck ?'#18987a' :'grey'}} >Login  </button>
              
                </form> 
            </div>
        </div>
    )
}