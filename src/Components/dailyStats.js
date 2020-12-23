
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';


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
    var usa,usad,usar;
    var france,franced,francer;
    var india, indiad, indiar;
    var china,chinad,chinar;
    var pak,pakd,pakr;
    const [globalData, setGlobalData] = useState({});
    const [pakData, setPakistanData] = useState({});
    const [ChinaData, setChinaData] = useState({});
    const [FranceData, setFranceData] = useState({});
    const [IndiaData, setIndiaData] = useState({});

    

    useEffect(() => {
        async function getData() {
          const data = await fetch("https://covid19.mathdro.id/api/countries").then(response => response.json());
            const usa = await fetch("https://covid19.mathdro.id/api/countries/USA").then(response => response.json());
            const pak = await fetch("https://covid19.mathdro.id/api/countries/Pakistan").then(response => response.json());
            const china = await fetch("https://covid19.mathdro.id/api/countries/Italy").then(response => response.json());
            const france = await fetch("https://covid19.mathdro.id/api/countries/France").then(response => response.json());
            const india = await fetch("https://covid19.mathdro.id/api/countries/Bangladesh").then(response => response.json());
          
            console.log(data)
             setGlobalData(usa)
             
           

             setPakistanData(pak)
             setChinaData(china)
             setFranceData(france)
             setIndiaData(india)



        }
        getData();
    }, [])


{Object.keys(FranceData).map((key, ind) => {
        france=FranceData.confirmed.value
        francer=FranceData.recovered.value
        franced=FranceData.deaths.value
    }
)}

{Object.keys(IndiaData).map((key, ind) => {
    india=IndiaData.confirmed.value
    indiad=IndiaData.deaths.value
    indiar=IndiaData.recovered.value
    
}
)}
    {Object.keys(globalData).map((key, ind) => {
        usa=globalData.confirmed.value
        usad=globalData.deaths.value
        usar=globalData.recovered.value
    }
)}
{Object.keys(ChinaData).map((key, ind) => {
    china=ChinaData.confirmed.value
    chinar=ChinaData.recovered.value
    chinad=ChinaData.deaths.value
}
)}
    {Object.keys(pakData).map((key, ind) => {
        pak=pakData.confirmed.value
        pakd=pakData.deaths.value
        pakr=pakData.recovered.value
    }
)}
 
    const datas
     = {
        labels: ['PAKISTAN', 'ITALY', 'FRANCE', 'BANGLADESH'],
        datasets: [
          {
            label: 'Confirmed Cases',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            
            data: [pak, china, france, india]
          },

          {
            label: 'Recovered',
            backgroundColor: 'green',
            borderColor: 'aqua',
            borderWidth: 1,
            hoverBackgroundColor: 'darkgreen',
            hoverBorderColor: 'darkgreen',
            
            data: [pakr, chinar, francer, indiar]
          },
          
          {
            label: 'Deaths',
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1,
            hoverBackgroundColor: 'red',
            hoverBorderColor: 'red',
            
            data: [pakd, chinad, franced, indiad]
          }

        ]
      };
      
    const classes = useStyles();
    

 let count=1
   
 return (
    <div>
    <h2>COVID 19 GRAPH</h2>
    <Bar
      data={datas}
    
      width={100}
      height={300}
      options={{
        maintainAspectRatio: false
      }}
    />
   
  </div>
 );
}
