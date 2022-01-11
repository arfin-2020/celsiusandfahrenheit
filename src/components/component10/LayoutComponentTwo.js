import React from 'react';
import UseWindowWidth from './hooks/UseWindowWidth';

export const LayoutComponentTwo = () => {
    const smallScreen = UseWindowWidth(768)
    return (
        <div>
            <h1> You are browsing on {smallScreen ? 'Small' : 'Large'} device</h1>
        </div>
    )
}