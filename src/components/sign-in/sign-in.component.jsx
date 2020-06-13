import React from 'react';

import {ReactComponent as Email} from '../../assets/mail-icon.svg';
import {ReactComponent as Password} from '../../assets/password-icon.svg';
import {ReactComponent as GoogleIcon} from '../../assets/google-icon.svg';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormWrapper from '../form-wrapper/form-wrapper.styles';

const SignIn = ({switchPage}) => {
    return (
        <>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <FormWrapper>
                    <Email />
                    <FormInput name="email" type="email" placeholder={'E-mail'} />
                </FormWrapper>
                <FormWrapper style={{marginBottom: '45px'}}>
                    <Password />
                    <FormInput name="password" type="password" placeholder={'Password'} />
                </FormWrapper>
                <CustomButton type="submit">
                    Sign In
                </CustomButton>
                <CustomButton type="button" googleSignIn>
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
