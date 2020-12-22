
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Barr from './bar'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '10px auto',
    backgroundColor: 'whitesmoke',
    boxShadow: '0 0  10px #888888',
    padding: '15px 20px',
    minWidth:"100px",
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 10px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DailyStats() {
    const [globalData, setGlobalData] = useState({});
    

    useEffect(() => {
        async function getData() {
            const data = await fetch("https://covid19.mathdro.id/api/countries/").then(response => response.json());
          
             console.log(data)

             setGlobalData(data)


      
          console.log(globalData)
        }
        getData();
    }, [])

    const classes = useStyles();

 let count=1
   
 return (
<Barr/>
  );
}
