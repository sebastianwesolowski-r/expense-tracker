import styled from 'styled-components';

import {themes} from '../../themes/themes';

export const AchievedGoal = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 35px;
    font-size: 16px;
    padding: 0 20px;
    margin-bottom: 20px;
    border: 1px solid ${themes.colors.lightblue};
    border-radius: 4px;
    span {
        color: ${themes.colors.leaf};
    }
`;