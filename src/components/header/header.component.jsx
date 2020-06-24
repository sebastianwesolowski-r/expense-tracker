import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const AppName = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 110px;
    font-size: 24px;
    color: ${themes.colors.black};

`;

const Header = () => (
    <AppName>
        <h3>Expense Tracker</h3>
    </AppName>
);

export default Header;