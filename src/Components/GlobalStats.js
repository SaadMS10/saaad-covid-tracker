import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 0 0 27%',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase'
    },
    al:{
        margin_left:"20px"

    }
}));

export default function GlobalStats() {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {

        
        async function getData() {
            console.log("fetching data")
            const data = await fetch("https://covid19.mathdro.id/api").then(response => response.json());
            
            console.log(data)
            setGlobalData(data);
            console.log(globalData)
        }
        getData();
       
    }, [])

    const classes = useStyles();
  console.log(globalData.confirmed)
 let count=1
   
  return (
    <div className={classes.root}>
      
        <Grid className={classes.al} container spacing={3}>
            {Object.keys(globalData).map((key, ind) => {
                if (count==1){
                    count++
                return (
                    <Grid  item xs={12} sm={8} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={3}>
                                <h3 className={classes.title}>
                                    CONFIRMED CASES
                                    
                                </h3>
                                <h3>{globalData.confirmed.value}</h3>
                        </Paper>
                    </Grid>    
                )}
                if (count==2){
                    count++
                return (
                    <Grid item xs={12} sm={8} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={3}>
                                <h3 className={classes.title}style={{color:"green"}}>
                                    RECOVERED CASES
                                    
                                </h3>
                                <h3>{globalData.recovered.value}</h3>
                        </Paper>
                    </Grid>
                    
                )
               
}
if (count==3){
    count++
return (
    <Grid item xs={12} sm={8} key={ind}>
        <Paper 
            className={classes.paper} 
            elevation={3}>
                <h3 className={classes.title} style={{color:"red"}}>
                    TOTAL DEATHS
                    
                </h3>
                <h3>{globalData.deaths.value}</h3>
        </Paper>
    </Grid>
    
    
)

}














})}

        </Grid>
    </div>
);
}
