import { useCallback, useEffect, useState } from 'react';

const UseWindowWidth = (screenSize) => {
    const [smallScreen, setSmallScreen] = useState(false);

    const checkScreenSize = useCallback(() => {
        setSmallScreen(window.innerWidth < screenSize)
    }, [screenSize])

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize])

    return smallScreen;
}
export default UseWindowWidth;