import React, {useState} from 'react';

import {ReactComponent as Close} from '../../assets/close.svg';

import CustomPopup from '../custom-popup/custom-popup.styles';
import CustomBtn from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const AddTransaction = ({closePopup, addTransaction}) => {

    const [transactionData, setTransactionData] = useState({title: '', amount: 0});
    const {title, amount} = transactionData;

    const handleChange = event => {
        const {value, name} = event.target;
        setTransactionData({...transactionData, [name]: value});
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            title: title,
            amount: +amount
        };
        await addTransaction(newTransaction);
    };

    return (
        <CustomPopup>
            <Close onClick={() => closePopup()}/>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <FormInput name="title" value={title} type="text" onChange={handleChange} placeholder={'Title'} popup required/>
                <FormInput name="amount" value={amount} type="number" onChange={handleChange} placeholder={'Amount(type - to add expense)'} popup required/>
                <CustomBtn googleSignIn>Add transaction</CustomBtn>
            </form>
        </CustomPopup>
    );
};

export default AddTransaction;