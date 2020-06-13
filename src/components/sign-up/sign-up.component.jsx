import React from 'react';

import {ReactComponent as Email} from '../../assets/mail-icon.svg';
import {ReactComponent as Password} from '../../assets/password-icon.svg';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormWrapper from '../form-wrapper/form-wrapper.styles';

const SignUp = ({switchPage}) => {
    return (
        <>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <FormWrapper>
                    <Email />
                    <FormInput name="email" type="email" placeholder={'E-mail'} />
                </FormWrapper>
                <FormWrapper>
                    <Password />
                    <FormInput name="password" type="password" placeholder={'Password'} />
                </FormWrapper>
                <FormWrapper style={{marginBottom: '45px'}}>
                    <Password />
                    <FormInput name="confirmPassword" type="password" placeholder={'Confirm Password'} />
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