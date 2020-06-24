import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Logout} from '../../assets/logout-icon.svg';

const SignOutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 20px;
    left: 0;
    font-size: 14px;
    color: #525252;
    padding-left: 15px;
    svg {
        position: relative;
        left: 40px;
        cursor: pointer;
    }
`

const SignOut = ({userEmail, signOut}) => (
    <SignOutContainer>
        <span>{userEmail}</span>
        <Logout onClick={() => signOut()}/>
    </SignOutContainer>
);

export default SignOut;