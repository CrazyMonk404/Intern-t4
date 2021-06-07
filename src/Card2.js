import React from 'react'
import './Card2.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Progress from './progress'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CenterFocusStrong } from '@material-ui/icons';
import ShowChartIcon from '@material-ui/icons/ShowChart';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Card2 = () =>{

    const classes = useStyles();
    return(
        
        <div className="maincard">
         <table className="tabledone">
             <tr>
                 <th>Attendance</th>
                 <th>Tests</th>
                 <th>HW Rating</th>
            </tr>
            <tr>
            
                 <td><Progress percentage='92'/></td>
                 <td><Progress percentage='90'/></td>
                 <td><Rating name="half-rating" defaultValue={4.1} precision={0.5} /></td>
                 <td></td>
            </tr>
            <tr>
                 <td>Last absence </td>
                 <td >Last Test</td>
                 <td>Last Homework</td>
            </tr>
            <tr>
                 <td align="center">12th May</td>
                 <td textAlign="center">100 %</td>
                 <td test="center">4.5</td>
                 <td><ShowChartIcon/></td>
                 <td>DEC</td>
            </tr>
        </table>
         
         
        </div>
    
    )
}
export default Card2;

