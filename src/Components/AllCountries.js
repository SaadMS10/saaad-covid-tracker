import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 0 0 15%',
        marginTop: 50,
        paddingRight:'20px',
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





export default function AllCountries() {
    const [globalData, setGlobalData] = useState({});
    const [pakData, setPakistanData] = useState({});
    const [ChinaData, setChinaData] = useState({});
    const [FranceData, setFranceData] = useState({});
    const [IndiaData, setIndiaData] = useState({});

    useEffect(() => {
        async function getData() {
            const usa = await fetch("https://covid19.mathdro.id/api/countries/USA").then(response => response.json());
            const pak = await fetch("https://covid19.mathdro.id/api/countries/Pakistan").then(response => response.json());
            const china = await fetch("https://covid19.mathdro.id/api/countries/China").then(response => response.json());
            const france = await fetch("https://covid19.mathdro.id/api/countries/France").then(response => response.json());
            const india = await fetch("https://covid19.mathdro.id/api/countries/India").then(response => response.json());
          
             console.log(usa)

             setGlobalData(usa)
             console.log(pak)

             setPakistanData(pak)
             setChinaData(china)
             setFranceData(france)
             setIndiaData(india)



        }
        getData();
    }, [])

    const classes = useStyles();
     let count=1
   

 

    return (
        <div className={classes.root}>
         <Grid className={classes.al} container spacing={3}>
            {Object.keys(globalData).map((key, ind) => {
                if (count===1){
                    count++
                return (
                    <Grid  item xs={12} sm={3} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={5}>
                             <Typography variant="h1" component="h2">
                                                 USA
                                    </Typography>           
                                <h3 className={classes.title}>
                                    CONFIRMED CASES   
                                </h3>
                                <h3>{globalData.confirmed.value} </h3>
                        
                                <h3 className={classes.title} style={{color:"green"}}>
                                    RECOVERED CASES 
                                </h3>
                                <h3 style={{color:"green"}}>{globalData.recovered.value}</h3>
                                <h3 className={classes.title} style={{color:"red"}}>
                                    DEATH CASES   
                                </h3>
                                <h3 style={{color:"red"}}>{globalData.deaths.value}</h3>
                           
                        </Paper>
                    </Grid>    
                )} }
 )}
 
 {Object.keys(pakData).map((key, ind) => {
                if (count===2){
                    count++
                return (
                    <Grid  item xs={12} sm={3} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={5}>
                         
        <Typography variant="h1" component="h2">
          PAK
        </Typography>
                                <h3 className={classes.title}>
                                    CONFIRMED CASES  </h3>
                                <h3>{pakData.confirmed.value} </h3>
                                                  
                                <h3 className={classes.title} style={{color:"green"}}>
                                    RECOVERED CASES  </h3>
                                <h3 style={{color:"green"}}>{pakData.recovered.value}</h3>
                                <h3 className={classes.title} style={{color:"red"}}>
                                    DEATH CASES  </h3>
                                <h3 style={{color:"red"}}>{pakData.deaths.value}</h3>
            
                        </Paper>
        
                    </Grid>    
                )} }
 )}


 {Object.keys(ChinaData).map((key, ind) => {
                if (count===3){
                    count++
                return (
                    <Grid  item xs={12} sm={3} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={5}>
                         
        <Typography variant="h1" component="h2">
          CHI
        </Typography>
                                <h3 className={classes.title}>
                                    CONFIRMED CASES  </h3>
                                <h3>{ChinaData.confirmed.value} </h3>
                                                  
                                <h3 className={classes.title} style={{color:"green"}}>
                                    RECOVERED CASES  </h3>
                                <h3 style={{color:"green"}}>{ChinaData.recovered.value}</h3>
                                <h3 className={classes.title} style={{color:"red"}}>
                                    DEATH CASES  </h3>
                                <h3 style={{color:"red"}}>{ChinaData.deaths.value}</h3>
            
                        </Paper>
        
                    </Grid>    
                )} }
 )}

{Object.keys(FranceData).map((key, ind) => {
                if (count===4){
                    count++
                return (
                    <Grid  item xs={12} sm={3} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={5}>
                         
        <Typography variant="h1" component="h2">
          FRA
        </Typography>
                                <h3 className={classes.title}>
                                    CONFIRMED CASES  </h3>
                                <h3>{FranceData.confirmed.value} </h3>
                                                  
                                <h3 className={classes.title} style={{color:"green"}}>
                                    RECOVERED CASES  </h3>
                                <h3 style={{color:"green"}}>{FranceData.recovered.value}</h3>
                                <h3 className={classes.title} style={{color:"red"}}>
                                    DEATH CASES  </h3>
                                <h3 style={{color:"red"}}>{FranceData.deaths.value}</h3>
            
                        </Paper>
        
                    </Grid>    
                )} }
 )}

{Object.keys(IndiaData).map((key, ind) => {
                if (count===5){
                    count++
                return (
                    <Grid  item xs={12} sm={3} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={5}>
                         
        <Typography variant="h1" component="h2">
          IND
        </Typography>
                                <h3 className={classes.title}>
                                    CONFIRMED CASES  </h3>
                                <h3>{IndiaData.confirmed.value} </h3>
                                                  
                                <h3 className={classes.title} style={{color:"green"}}>
                                    RECOVERED CASES  </h3>
                                <h3 style={{color:"green"}}>{IndiaData.recovered.value}</h3>
                                <h3 className={classes.title} style={{color:"red"}}>
                                    DEATH CASES  </h3>
                                <h3 style={{color:"red"}}>{IndiaData.deaths.value}</h3>
            
                        </Paper>
        
                    </Grid>    
                )} }
 )}
 {Object.keys(IndiaData).map((key, ind) => {
                if (count===6){
                    count++
                return (
                    <Grid  item xs={12} sm={3} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={5}>
                         
        <Typography variant="h1" component="h2">
          ITA
        </Typography>
                                <h3 className={classes.title}>
                                    CONFIRMED CASES  </h3>
                                <h3>{IndiaData.confirmed.value} </h3>
                                                  
                                <h3 className={classes.title} style={{color:"green"}}>
                                    RECOVERED CASES  </h3>
                                <h3 style={{color:"green"}}>{IndiaData.recovered.value}</h3>
                                <h3 className={classes.title} style={{color:"red"}}>
                                    DEATH CASES  </h3>
                                <h3 style={{color:"red"}}>{IndiaData.deaths.value}</h3>
            
                        </Paper>
        
                    </Grid>    
                )} }
 )}{Object.keys(IndiaData).map((key, ind) => {
    if (count===7){
        count++
    return (
        <Grid  item xs={12} sm={3} key={ind}>
            <Paper 
                className={classes.paper} 
                elevation={5}>
             
<Typography variant="h1" component="h2">
AUS
</Typography>
                    <h3 className={classes.title}>
                        CONFIRMED CASES  </h3>
                    <h3>{IndiaData.confirmed.value} </h3>
                                      
                    <h3 className={classes.title} style={{color:"green"}}>
                        RECOVERED CASES  </h3>
                    <h3 style={{color:"green"}}>{IndiaData.recovered.value}</h3>
                    <h3 className={classes.title} style={{color:"red"}}>
                        DEATH CASES  </h3>
                    <h3 style={{color:"red"}}>{IndiaData.deaths.value}</h3>

            </Paper>

        </Grid>    
    )} }
)}{Object.keys(IndiaData).map((key, ind) => {
    if (count===8){
        count++
    return (
        <Grid  item xs={12} sm={3} key={ind}>
            <Paper 
                className={classes.paper} 
                elevation={5}>
             
<Typography variant="h1" component="h2">
BAN
</Typography>
                    <h3 className={classes.title}>
                        CONFIRMED CASES  </h3>
                    <h3>{IndiaData.confirmed.value} </h3>
                                      
                    <h3 className={classes.title} style={{color:"green"}}>
                        RECOVERED CASES  </h3>
                    <h3 style={{color:"green"}}>{IndiaData.recovered.value}</h3>
                    <h3 className={classes.title} style={{color:"red"}}>
                        DEATH CASES  </h3>
                    <h3 style={{color:"red"}}>{IndiaData.deaths.value}</h3>

            </Paper>

        </Grid>    
    )} }
)}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 </Grid>
        </div>
    );
    }
    