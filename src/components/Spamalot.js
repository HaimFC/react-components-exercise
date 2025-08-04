import React from 'react';
import Spam from './Spam';

const Spamalot = () => {
    const spams = Array.from({ length: 500 }, (_, i) => <Spam key={i} />);
    return spams;
}

export default Spamalot;