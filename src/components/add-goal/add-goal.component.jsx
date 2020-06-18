import React from 'react';

import {ReactComponent as Close} from '../../assets/close.svg';

import CustomPopup from '../custom-popup/custom-popup.styles';
import CustomBtn from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const AddGoal = ({closePopup}) => (
    <CustomPopup>
        <Close onClick={() => closePopup()}/>
        <h3>Create your new saving goal</h3>
        <FormInput placeholder={'Enter your plan'} popup/>
        <FormInput placeholder={'Amount'} popup/>
        <CustomBtn googleSignIn>Create goal</CustomBtn>
    </CustomPopup>
);

export default AddGoal;