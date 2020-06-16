import React, {useState} from 'react';

import {ReactComponent as Email} from '../../assets/mail-icon.svg';
import {ReactComponent as Password} from '../../assets/password-icon.svg';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormWrapper from '../form-wrapper/form-wrapper.styles';

const SignUp = ({switchPage, signUp}) => {

    const [registerData, setRegisterData] = useState({email: '', password: '', confirmPassword: ''});
    const {email, password, confirmPassword} = registerData;

    const handleChange = event => {
        const {value, name} = event.target;
        setRegisterData({...registerData, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        if(password === confirmPassword) {
            signUp(registerData)
        } else {
            alert("Password's didn't match");
            return;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <FormWrapper>
                    <Email />
                    <FormInput name="email" type="email" value={email} onChange={handleChange} placeholder={'E-mail'} required/>
                </FormWrapper>
                <FormWrapper>
                    <Password />
                    <FormInput name="password" type="password" value={password} onChange={handleChange} placeholder={'Password'} required/>
                </FormWrapper>
                <FormWrapper style={{marginBottom: '45px'}}>
                    <Password />
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} onChange={handleChange} placeholder={'Confirm Password'} required/>
                </FormWrapper>
                <CustomButton type="submit">
                    Sign Up
                </CustomButton>
            </form>
            <div style={{fontSize: '16px', marginTop: '45px', cursor: 'pointer'}} onClick={() => switchPage()}>
                Sign In
            </div>
        </>
    );
};

export default SignUp;