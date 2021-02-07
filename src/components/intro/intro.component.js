import React from 'react'
import { IconButton } from "@material-ui/core"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import "./intro.component.scss"
import SpacerComponent from '../spacer/spacer.component';

const IntroComponent = ({ onSwitch }) => {
    return (
        <div className="intro">

            <div style={{
                display: 'grid',
                placeItems: 'center'
            }}>
                <h2 className="moveup_1"> LETS MAKE DECISION MAKING </h2>
                <SpacerComponent space={1} />
                <h1 className="moveup_6"> CREATIVE. </h1>

                <SpacerComponent space={4} />

                <div className="moveup_10">
                    <IconButton color="primary" size="medium" onClick={onSwitch}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </div>
            </div>
            

        </div>
    )
}

export default IntroComponent
