import React from "react";
import Snackbar  from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from "@material-ui/core";

  const CustomisedSnackbar = ({open,setOpen}) => {
    const useStyles = makeStyles(theme => ({
      root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
            color:'#b59393'
          },
        },
    }));
    const classes=useStyles();
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
     return (
       <div className={classes.root} >
         <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
        open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" style={{color:'#b59393',backgroundColor:'#380808'}}>Successful Transaction</MuiAlert>
        </Snackbar>
       </div>
     )
  }
   
   export default CustomisedSnackbar
   
