import React from 'react'

import {
    AppBar, Toolbar,
} from "@material-ui/core"

import "./app_bar.component.scss"


const AppBarComponent = () => {
    return (
        <>
        <AppBar 
          color="primary"  
          elevation={0} 
          position="fixed" 
        //   style={{ backgroundColor: 'transparent' }}
          >
        <Toolbar>
        <div className="app_bar">

            {/* logo  */}
            <h3> TOSELP </h3>

            {/* <h3> END </h3> */}

            {/* links  */}
            <div className="app_bar__links">

                <h5 className="app_bar__links__link"> WHY WE EXIST </h5>
                <h5 className="app_bar__links__link"> WHY WE EXIST </h5>
                <h5 className="app_bar__links__link"> WHY WE EXIST </h5> 

            </div>
            
        </div>
        </Toolbar>
        </AppBar>
        <Toolbar />
        </>
    )
}

export default AppBarComponent
