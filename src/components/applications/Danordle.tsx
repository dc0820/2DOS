import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface DanordleAppProps extends WindowAppProps {}

const DanordleApp: React.FC<DanordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Danordle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2023 Daniel Cook'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default DanordleApp;
