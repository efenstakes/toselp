import React, { useState } from 'react'
import clsx from 'clsx'

import AppBarComponent from '../components/app_bar/app_bar.component'
import IntroComponent from '../components/intro/intro.component'

import './home.page.scss'
import WhyWeExistComponent from '../components/why_we_exist/why_we_exist.component'
import SpacerComponent from '../components/spacer/spacer.component'
import FooterComponent from '../components/footer/footer.component'
import MobileAppBarComponent from '../components/app_bar/mobile_app_bar.component'
import WorkWithUsComponent from '../components/work_with_us/work_with_us.component'

const HomePage = () => {
    const [switchFromIntro, setswitchFromIntro] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const onSwitch = ()=> setswitchFromIntro(true)  
    
    const toggleAppMobileMenu = ()=> setShowMobileMenu(!showMobileMenu)
    
    

    return (
        <div>

            {/* app bar  */}
            <AppBarComponent toggleAppMobileMenu={toggleAppMobileMenu}  showMenu={showMobileMenu}/>
            
            {/* mobile menu */}
            <MobileAppBarComponent showMenu={showMobileMenu}/>

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
                   <div style={{
                       margin: '0 16px'
                   }}>
                    <WhyWeExistComponent />

                    <SpacerComponent space={12} />
                    
                    <WorkWithUsComponent />
                    
                    <SpacerComponent space={12} />
                    
                   </div>

                   <FooterComponent />
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
