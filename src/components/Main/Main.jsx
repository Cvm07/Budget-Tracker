import React,{useContext} from 'react'
import {Grid,Card,CardHeader,CardContent,Typography, Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form'
import List from './List/List';
import { BudgetAppContext } from '../../Context/context';
const Main = () => {
    const classes=useStyles();
    const {balance}=useContext(BudgetAppContext);
  return (
    <Card className={classes.root} style={{marginTop:'40px',backgroundColor:'#ada58e'}} >
        <CardHeader title="Expense Tracker" align='center'/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight:'1.25em',marginTop:'20px',textAlign:'center'}}>
                Try saying 'add $50 to income in category deposits for tomorrow.'
            </Typography>
        <Divider/>
        <Form/>
        </CardContent>
    <CardContent classes={classes.cardContent} >
    <Grid container spacing={3} >
    <Grid item xs={12} style={{marginLeft:'10px',marginRight:'10px'}}>
    <List />
    </Grid>
    </Grid>
    </CardContent>    
    </Card>
  )
}

export default Main