import styled from 'styled-components';

import {themes} from '../../themes/themes';

const CustomPopup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 87.5%;
    position: absolute;
    z-index: 3;
    top: 190px;
    left: 0;
    right: 0;
    margin: auto;
    padding: 20px 0;
    border: 1px solid ${themes.colors.lightblue};
    border-radius: 10px;
    background-color: #FAFAFA;
    box-shadow: ${themes.effects.shadow};
    h3 {
        margin-bottom: 45px;
    }
    svg {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

export default CustomPopup;