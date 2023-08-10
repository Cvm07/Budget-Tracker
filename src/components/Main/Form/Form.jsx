import React,{useState,useContext,useEffect} from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import useStyles from './styles';
import { BudgetAppContext } from '../../../Context/context';
import {v4 as  uuidv4} from 'uuid';
import { incomeCategories,expenseCategories } from '../../../Constants/Categories';
import { useSpeechContext } from '@speechly/react-client/dist/hooks';
import CustomisedSnackbar from '../../Snackbar/Snackbar';
const initialState={
  amount:'',
  category:'',
  type:'',
  date:''
}

const Form = () => {
  const classes=useStyles();
  const [formData, setformData] = useState(initialState);
  const {addTransaction}=useContext(BudgetAppContext);
  const {segment}=useSpeechContext();
  const [open,setOpen]=React.useState(false);
  const createTransaction=()=>{
  if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
  const transaction= {...formData,amount:Number(formData.amount),id:uuidv4()};
  addTransaction(transaction);
  setOpen(true);
  setformData(initialState);
  }
  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setformData({ ...formData, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setformData({ ...formData, type: 'Income' });
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        return createTransaction();
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        return setformData(initialState);
      }

      segment.entities.forEach((s) => {
        const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

        switch (s.type) {
          case 'amount':
            setformData({ ...formData, amount: s.value });
            break;
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setformData({ ...formData, type: 'Income', category });
            } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
              setformData({ ...formData, type: 'Expense', category });
            }
            break;
          case 'date':
            setformData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });
      if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date && formData.amount!==0) {
        createTransaction();
      }
      else{
        return;
      }
    }
  }, [segment])
  
  const selectedCategories=(formData.type==='Income' ? incomeCategories:expenseCategories);
  return (
  <Grid container spacing={2}  justifyContent="center">
  <CustomisedSnackbar  open={open} setOpen={setOpen}/>
  <Grid item xs={12}>
  <Typography align="center" variant='subtitle2' gutterBottom>
  {
    segment?(
      <>
      {segment.words.map((w)=>w.value).join(" ")}
      </>
    ):null
  }
  </Typography>
  </Grid>
  <Grid item xs={6}>
  <FormControl fullWidth>
    <InputLabel style={{color:'black'}}>Type</InputLabel>
    <Select value={formData.type} onChange={(e)=>setformData({...formData,type: e.target.value})} style={{color:'black'}}>
      <MenuItem value="Income">Income</MenuItem>
      <MenuItem value="Expense" style={{color:'black'}}>Expense</MenuItem>
    </Select>
  </FormControl>
  </Grid>
  <Grid item xs={6}>
  <FormControl fullWidth>
    <InputLabel style={{color:'black'}}>Category</InputLabel>
    <Select value={formData.category} onChange={(e)=>setformData({...formData,category:e.target.value})}>
    {
    selectedCategories.map((c)=>
    <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)
    }
    </Select>
  </FormControl>
  </Grid>
  <Grid item xs={6} >
  <TextField type='number' label='Amount' style={{color:'black'}} fullWidth value={formData.amount} onChange={(e)=>setformData({...formData,amount:e.target.value})} />
  </Grid>
  <Grid item xs={6}>
  <TextField type='date' fullWidth value={formData.date} style={{color:'black'}} onChange={(e)=>setformData({...formData,date:(e.target.value)})}/>
  </Grid>
  <Button className={classes.button} variant='outlined' color='black' onClick={createTransaction} >Create</Button>
  </Grid>
  )
}

export default Form;