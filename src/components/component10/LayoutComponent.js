// import React, { useEffect, useState } from 'react';


// export const LayoutComponentOne = () =>{
//     const [onSmallScreen, setOnSmallScreen] = useState(false);

//     const checkScreenSize = () =>{
//         setOnSmallScreen(window.innerWidth < 768)
//     }

//     useEffect(()=>{
//         checkScreenSize();
//         window.addEventListener('resize',checkScreenSize);
//         return () => window.removeEventListener('resize', checkScreenSize);
//     },[])
//     return(
//         <div>
//             <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} Device.......</h1>
//         </div>
//     )
// }



import React from 'react';
import UseWindowWidth from './hooks/UseWindowWidth';
export const LayoutComponentOne = () => {
    const smallScreen = UseWindowWidth(560);
    return (
        <div className={smallScreen ? 'Small' : 'Large'}>
            <h1> You are browsing on {smallScreen ? 'Small' : 'Large'} device</h1>
        </div>
    )
}