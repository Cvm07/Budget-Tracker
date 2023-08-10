import React ,{useContext} from 'react'
import useStyles from './styles'
import {List as MUIlist,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import { Delete,MoneyOff } from '@material-ui/icons';
import { BudgetAppContext } from '../../../Context/context';
 const List = () => {
 
    const classes=useStyles();
    const {transactions,deleteTransaction}=useContext(BudgetAppContext);

   return (
    <MUIlist dense={false} className={classes.list} style={{color:'black'}}>
      {transactions.map((transaction)=>(
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id} style={{color:'black'}}>
        <ListItem >
            <ListItemAvatar>
                <Avatar className={transaction.type==='Income' ? classes.avatarIncome: classes.avatarExpense} style={{color:'black'}}>
                <MoneyOff/> 
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary ={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
        
        <ListItemSecondaryAction>
            <IconButton edge='end' aria-label='delete' onClick={()=>deleteTransaction(transaction.id)}>
                <Delete/>
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
        </Slide>
      ))}
    </MUIlist>
   )
 }
 
 export default List;
 