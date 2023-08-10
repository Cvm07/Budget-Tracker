import React from 'react'
import { Card,CardHeader,CardContent,Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useCategories from '../../useCategories';


const Details = ({title}) => {
  const classes=useStyles();
  const {total,chartData}=useCategories(title);
  return (
    <div >
   <Card  className={title==='Income' ? classes.income : classes.expense} style={{background:'#f5efd5'}}>
    <CardHeader title={title} />
    <CardContent style={{paddingBottom:'2px'}}>
        <div style={{marginBottom:'10px',justifyItems:'center'}}>
        <Typography variant='h5'>${total}</Typography>
        <Doughnut data={chartData} height='1000px' width='1000px'/>
        </div>
    </CardContent>   
   </Card>
   </div>
  )
}

export default Details;