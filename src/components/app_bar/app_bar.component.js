import React from 'react'

import {
    AppBar, IconButton, Toolbar, Hidden,
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import "./app_bar.component.scss"


const AppBarComponent = ({ showMenu, toggleAppMobileMenu }) => {
    return (
        <>
         <Hidden mdUp>
            <MobileAppBar showMenu={showMenu} toggleAppMobileMenu={toggleAppMobileMenu} />
         </Hidden>
         <Hidden smDown>
            <DesktopAppBar />
         </Hidden>
        </>
    )
}


const DesktopAppBar = ()=> {
    
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

const MobileAppBar = ({ showMenu, toggleAppMobileMenu })=> {
    return (
        <>
        <AppBar
        color="primary"  
        elevation={0} 
        position="fixed" >

            <Toolbar>
                <div className="app_bar">

                {/* logo  */}
                <h3> TOSELP </h3>

                {/* icon */}
                <IconButton  
                onClick={()=> {
                    console.log('open menu')
                    toggleAppMobileMenu()
                }}
                aria-label="delete">
                    {
                        showMenu 
                          ? <CloseIcon style={{color: 'white'}} /> 
                          : <MenuIcon style={{color: 'white'}} />
                    }
                </IconButton>

                </div>
            </Toolbar>

        </AppBar>
        <Toolbar />
        </>
    )
}

export default AppBarComponent
