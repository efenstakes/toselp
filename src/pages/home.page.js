import React, { useState } from 'react'
import clsx from 'clsx'

import AppBarComponent from '../components/app_bar/app_bar.component'
import IntroComponent from '../components/intro/intro.component'

import './home.page.scss'
import WhyWeExistComponent from '../components/why_we_exist/why_we_exist.component'
import SpacerComponent from '../components/spacer/spacer.component'


const HomePage = () => {
    const [switchFromIntro, setswitchFromIntro] = useState(false)

    const onSwitch = ()=> setswitchFromIntro(true)   
    

    return (
        <div>

            {/* app bar  */}
            <AppBarComponent />

            {/* intro */}
            <div className={
                clsx({
                    "hide": switchFromIntro,
                })
            }>
            <IntroComponent onSwitch={onSwitch} />
            </div>

            {/* why we exist */}
            {
                switchFromIntro 
                ? <>
                <SpacerComponent space={4} />
                <div className={
                   clsx({
                       "reveal": switchFromIntro,
                       "conceal": !switchFromIntro,
                       "why_we_exist": true,
                   })
               }>
                   <WhyWeExistComponent />
               </div>
               </>
               : <div />
            }


            {/* what we do */}


            {/* how to get us */}
            
        </div>
    )
}

export default HomePage
