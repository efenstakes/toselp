import React from 'react'
import { 
    Card, CardActionArea, CardMedia, CardContent, Typography, 
    CardActions, Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';



const useStyles = makeStyles({
    root: {
      maxWidth: 280,
    },
  });
const WhyWeExistCardComponent = ({ title, description, imageUrl, index }) => {
    const classes = useStyles();

    const animator = `moveup_${0+(index*4)}`

    return (
        <div className={animator}
          style={{
              width: '399px',
              height: '355px',
            //   backgroundColor: 'violet',
              marginBottom: '30px'
          }}
        >
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default WhyWeExistCardComponent
