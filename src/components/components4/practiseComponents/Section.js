import React, { useContext } from "react";
import ClickCounter from "../../components3/practiseComponents/ClickCounter";
import ThemeContext from "../../components4/Contexts/ThemeContext";
import DecreaseCounter from "../../components4/practiseComponents/DecreaseCounter";

const Section = () => {
    const context =  useContext(ThemeContext);
    console.log(context.theme);
    return (
        <div>
            <DecreaseCounter>
                {(count, increaseFuntion) => {
                    return (
                        <ThemeContext.Consumer>
                            {({ theme, switchTheme }) => (
                                <ClickCounter
                                    theme={theme}
                                    switchTheme={switchTheme}
                                    increaseFuntion={increaseFuntion}
                                    count={count}
                                />
                            )}
                        </ThemeContext.Consumer>
                    );
                }}
            </DecreaseCounter>
        </div>
    );
};

export default Section;
