import React, {useState} from 'react';

import {ReactComponent as Close} from '../../assets/close.svg';

import CustomPopup from '../custom-popup/custom-popup.styles';
import CustomBtn from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const AddGoal = ({closePopup, addGoal}) => {

    const [goalData, setGoalData] = useState({plan: '', target: 0});
    const {plan, target} = goalData;

    const handleChange = event => {
        event.preventDefault();
        const {value, name} = event.target;
        setGoalData({...goalData, [name]: value});
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const newGoal = {
            id: Math.floor(Math.random() * 10000000),
            goalTarget: +target,
            goalTransactions: [],
            title: plan
        };
        await addGoal(newGoal);
        closePopup();
    };

    return (
        <CustomPopup>
            <Close onClick={() => closePopup()}/>
            <h3>Create your new saving goal</h3>
            <form onSubmit={handleSubmit}>
                <FormInput name="plan" value={plan} type="text" onChange={handleChange} placeholder={'Enter your plan'} popup required/>
                <FormInput name="target" value={target} onChange={handleChange} placeholder={'Target'} popup required/>
                <CustomBtn googleSignIn>Create goal</CustomBtn>
            </form>
        </CustomPopup>
    );
};

export default AddGoal;