import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const SpinnerOverlay = styled.div`
    height: calc(100vh - 1px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(249, 249, 249, 0.45);
    padding-bottom: 25%;
`;

const SpinnerContainer = styled.div`
    display: inline-block;
    width: 110px;
    height: 110px;
    border: 4px solid ${themes.colors.dark};
    border-radius: 50%;
    border-top-color: ${themes.colors.googleblue};
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
        -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
        -webkit-transform: rotate(360deg);
        }
    }
`;

const OverlaySpinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default OverlaySpinner;