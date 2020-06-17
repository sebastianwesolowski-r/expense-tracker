import React from 'react';

import {CustomBtn} from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => (
    <CustomBtn {...otherProps}>
        {children}
    </CustomBtn>
);

export default CustomButton;