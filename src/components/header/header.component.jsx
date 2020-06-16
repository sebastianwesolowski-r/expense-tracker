import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const AppName = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 120px;
    font-size: 24px;
    color: ${themes.colors.dark};
    text-shadow: ${themes.effects.shadow};
`;

const Header = () => (
    <AppName>Expense Tracker</AppName>
);

export default Header;