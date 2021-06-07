import { Button } from '@material-ui/core'
import React from 'react'
import './Card.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EditIcon from '@material-ui/icons/Edit';

const Card = () =>{
    const username='Varun'
    const totalstudents='125 Students'
    const update='Upcoming Thu, 25th May '
    const batchname='OSOS'
    const batchcode='|PHY_B1'
    return(
        <div className="maincard" >
            <table align="center">
                <tr>
                    
                    <td><label className="batch">{batchname}</label></td>
                    <td><label className="batch">{batchcode}</label></td>
                    <td></td>
                    <td align="top-right"><EditIcon /></td>
                </tr>
                <tr>
                    <td>.</td>
                </tr>
                <tr>
                    <td><AccountCircleIcon /></td>
                    <td><label className="username" >{username}</label></td>
                    <td></td>
                    <td align="top-right"><GroupAddIcon /></td>
                    
                </tr>
                <tr>
                    <td><AccountCircleIcon /></td>
                    <td><label className="username">{batchname}</label></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td><WatchLaterIcon /></td>
                    <td><label className="username" >{update}</label></td>
                    <td>
                    <div className="button">
                     <Button variant="outlined" color="primary" >VIEW</Button>
                    </div></td>
                
                </tr>
            
                <tr>
                    <td></td>
                </tr>
</table>
                    
            
        </div>
    )
}
export default Card;