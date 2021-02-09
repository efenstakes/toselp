import React from 'react'
import PropTypes from 'prop-types'

// import { Link, useHistory } from 'react-router-dom'
import {
    Grid, Link
} from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Facebook, LinkedIn, Pinterest } from '@material-ui/icons';


import './footer.component.scss'
import SpacerComponent from '../spacer/spacer.component'


const FooterComponent = () => {
    return (
       <div className="footer">
        <Grid container spacing={2} className="app_footer__content_section">
          <Grid item xs={1} sm={1} md={1} />

          {/* links */}
          <Grid item  xs={12} sm={5} md={3} 
            className="app_footer__content_section__important_links">

            <h3 className="app_footer__title"> SITE LINKS </h3>
            
            <SpacerComponent space={4} />
            <div className="footer__site_links">
                <Link to="/services" className="footer__link" style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginBottom: '6px'
                }}>
                    Services
                </Link>
                <Link to="/work-with-us" className="footer__link"  style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginBottom: '6px'
                }}>
                    Work With Us
                </Link>
                <Link to="/news" className="footer__link"  style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginBottom: '6px'
                }}>
                    News
                </Link>
                <Link to="/privacy" className="footer__link" style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginBottom: '6px'
                }} >
                    Privacy Policy
                </Link>
                <Link to="/work-with-us" className="footer__link" style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginBottom: '6px'
                }} >
                    Contact Us
                </Link>
            </div>
            
          </Grid>


          {/* contact  */}
          <Grid item xs={12} sm={5} md={3} className="footer__contact"
                // style={{ display: 'flex', flexDirection: 'column' }}
                >
                
            <h3 className="footer__contact__title" style={{ alignSelf: 'center' }}> CONTACT DETAILS </h3>
            
            <SpacerComponent space={4} />
            <div  style={{ alignSelf: 'center' }}>
              <h4> Phone </h4>
              <SpacerComponent space={2} />
              <p className="footer__contact__text"> +254 700000001 </p>
              
              <SpacerComponent space={4} />
              
              <h4> Address </h4>
              <SpacerComponent space={2} />
              <p className="footer__contact__text"> 
                Suite 36 
              </p>
              <SpacerComponent space={2} />
              <p className="footer__contact__text"> 
                Milton Keynes Business Center 
              </p>
              <SpacerComponent space={2} />
              <p className="footer__contact__text"> 
                Foxhunter Drive 
              </p>
              <SpacerComponent space={2} />
              <p className="footer__contact__text"> 
                MK14 6GD 
              </p>
            </div>
            

          </Grid>

          {/* socials */}
          <Grid item xs={12} sm={5} md={3} 
                // style={{ display: 'flex', flexDirection: 'column' }}
                className="app_footer__content_section__social_links">
                
            <h3 className="footer__socials__title" style={{ alignSelf: 'center' }} > FOLLOW US </h3>

            <SpacerComponent space={4} />
            <div style={{ alignSelf: 'center' }} 
            className="footer__socials__container">

              <div className="footer__socials__link">
                <InstagramIcon
                  style={{
                    fontSize: '1.2em',
                    color: 'black',
                  }}
                />
              </div>

              <div className="footer__socials__link"> 
                <TwitterIcon className=""
                  style={{
                    fontSize: '1.2em',
                    color: 'black',
                  }} />
              </div>

              <div className="footer__socials__link">  
                <Facebook className="" 
                  style={{
                    fontSize: '1.2em',
                    color: 'black',
                  }} />
              </div>
              

            </div>

          </Grid>

          <Grid item xs={1} sm={1} md={1} />
        </Grid>

        
        <p className="footer__copyright__text">
          &copy; {(new Date()).getFullYear()} TOSELP INC 
        </p> 
            
       </div>
    )
}

FooterComponent.propTypes = {

}

export default FooterComponent
