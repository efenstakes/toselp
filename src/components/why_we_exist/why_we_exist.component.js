import React from 'react'
import { Grid } from '@material-ui/core'

import WhyWeExistCardComponent from '../why_we_exist_card/why_we_exist_card.component'

import './why_we_exist.scss'

import ai from '../../assets/images/ai.jpeg'
import dl from '../../assets/images/dl.jpeg'
import dl2 from '../../assets/images/dl2.jpg'
import bd from '../../assets/images/bd.png'

const WhyWeExistComponent = () => {
    return (
        <>
        <Grid container spacing={2}>

            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <WhyWeExistCardComponent 
                  title="Big Data"
                  description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica"
                  imageUrl={bd}
                  index={1}
                />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <WhyWeExistCardComponent 
                  title="Deep Learning"
                  description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica"
                  imageUrl={dl}
                  index={2}
                />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <WhyWeExistCardComponent 
                  title="Data Science"
                  description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica"
                  imageUrl={dl2}
                  index={3}
                />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <WhyWeExistCardComponent 
                  title="AI"
                  description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica"
                  imageUrl={ai}
                  index={4}
                />
            </Grid>
        </Grid>  
        </>
    )
}

export default WhyWeExistComponent
