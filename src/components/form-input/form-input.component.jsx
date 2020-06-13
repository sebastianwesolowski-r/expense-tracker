import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const Input = styled.input`
    width: 90%;
    background: none;
    color: #000000;
    font-size: 16px;
    padding-left: 7px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid ${themes.colors.lightblue};
    outline: none;
    &::placeholder {
        color: ${themes.colors.dark};
        font-size: 15px;
        text-shadow: ${themes.effects.shadow};
    }
    &:focus {
        &::placeholder {
            color: #9C9C9C;
        }
    }
`;

const FormInput = ({handleChange, placeholder, ...otherProps}) => (
    <Input placeholder={placeholder} onChange={handleChange} {...otherProps} />
);

export default FormInput;