import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const AppName = styled.div`
    position: relative;
    top: 140px;
    font-size: 24px;
    color: ${themes.colors.dark};
    text-shadow: ${themes.effects.shadow};
`;

const Header = () => (
    <StyledHeader>
        <AppName>Expense Tracker</AppName>
    </StyledHeader>
);

export default Header;