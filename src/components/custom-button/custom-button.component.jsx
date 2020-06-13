import React from 'react';

import styled from 'styled-components';

import {themes} from '../../themes/themes';

const CustomBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 155px;
    height: 35px;
    color: #ffffff;
    font-size: 14px;
    border: none;
    background-color: ${props => props.googleSignIn ? themes.colors.googleblue : themes.colors.dark};
    outline: none;
    margin-top: 25px;
    cursor: pointer;
`;

const CustomButton = ({children, ...otherProps}) => (
    <CustomBtn {...otherProps}>
        {children}
    </CustomBtn>
);

export default CustomButton;