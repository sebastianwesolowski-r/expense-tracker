import React, {useState, useContext} from 'react';

import {GlobalContext} from '../context/global.state';

import SignOut from '../components/sign-out/sign-out.component';

import PageTemplate from '../components/page-template/page-template.styles';

const ProfilePage = () => {
    const {currentUser, signOut} = useContext(GlobalContext);
    
    const userEmail = currentUser.email;

    return (
        <PageTemplate>
            <SignOut userEmail={userEmail} signOut={signOut} />
        </PageTemplate>
    );
};

export default ProfilePage;