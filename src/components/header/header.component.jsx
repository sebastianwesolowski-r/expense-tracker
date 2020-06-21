import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const AppName = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 90px;
    font-size: 24px;
    color: ${themes.colors.darkblack};
    text-shadow: ${themes.effects.shadow};
`;

const Header = () => (
    <AppName>
        <h3>Expense Tracker</h3>
    </AppName>
);

export default Header;