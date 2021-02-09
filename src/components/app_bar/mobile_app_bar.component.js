import React from 'react'
import clsx from 'clsx'

import './mobile_app_bar.component.scss'


const MobileAppBarComponent = ({showMenu}) => {
    return (
        <div className={clsx({
            'mobile_menu': true,
            'show_menu': showMenu,
        })}>

            <h1> Link 1 </h1>
            <h1> Link 2 </h1>
            <h1> Link 3 </h1>
            <h1> Link 4 </h1>
            
        </div>
    )
}

export default MobileAppBarComponent
