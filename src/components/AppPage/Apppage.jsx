import React from 'react'
import { Grid} from '@material-ui/core'
import useStyles from './styles'
import Main from '../Main/Main'
import Details from '../Details/Details'
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'


const Apppage = () => {
    const classes = useStyles();
    
  return (
    <div justifyContent="center" alignItems='center'>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify='center' >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title='Income' />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title='Income' />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title='Expense' />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer >
        <PushToTalkButton gradientStops={['#f5d753','#000000']} size="73px" placement='bottom' intro="" hint='Hold to speak'/>
      </PushToTalkButtonContainer>
    </div>
  )
}

export default Apppage