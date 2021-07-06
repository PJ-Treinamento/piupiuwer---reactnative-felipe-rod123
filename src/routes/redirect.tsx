import React from 'react';
import { Redirect } from 'react-router-native';

const Redirection: React.FC = () => {
    return (
        <Redirect to={{
            pathname: '/', 
        }} />
    );
}

export default Redirection;