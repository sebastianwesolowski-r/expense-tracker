import React, {useState} from 'react';

import {ReactComponent as Email} from '../../assets/mail-icon.svg';
import {ReactComponent as Password} from '../../assets/password-icon.svg';
import {ReactComponent as GoogleIcon} from '../../assets/google-icon.svg';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormWrapper from '../form-wrapper/form-wrapper.styles';

const SignIn = ({switchPage, signInWithGoogle, signInWithEmail}) => {

    const [userData, setUserData] = useState({email: '', password: ''});
    const {email, password} = userData;

    const handleChange = event => {
        const {value, name} = event.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        signInWithEmail(userData);
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <FormWrapper>
                    <Email />
                    <FormInput name="email" type="email" value={email} onChange={handleChange} placeholder={'E-mail'} required/>
                </FormWrapper>
                <FormWrapper style={{marginBottom: '45px'}}>
                    <Password />
                    <FormInput name="password" value={password} type="password" onChange={handleChange} placeholder={'Password'} required/>
                </FormWrapper>
                <CustomButton type="submit">
                    Sign In
                </CustomButton>
                <CustomButton type="button" onClick={() => signInWithGoogle()} googleSignIn>
                    <GoogleIcon />
                </CustomButton>
            </form>
            <div style={{fontSize: '16px', marginTop: '45px', cursor: 'pointer'}} onClick={() => switchPage()}>
                Sign Up
            </div>
        </>
    );
};

export default SignIn;
