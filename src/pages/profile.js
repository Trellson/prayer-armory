import React, { Component, useState  } from 'react';
import FavoriteCard from '../components/favorites';
import {Grid } from '@material-ui/core'
import useStyles from '../styles/styles'
import axios from 'axios';
import Header from '../components/header'


function Profile (){
const [favorites, getFavorites ]=useState("");

    axios.get('http://localhost:5000/prayers/savePrayers')
    .then((response) =>  {
        getFavorites(response.data.parsedPrayers);
        console.log(response.data.parsedPrayers);
    })
    
    //get request to call favorites from the backend 
    //refre instock 

    const classes = useStyles();
        return (
            <>
            <div className={classes.cardGrid}>
                <Grid container Spacing={4}>
                    {favorites.map(() => {
                        return(
                            <FavoriteCard 
                            key={favorites.id}
                            category= {favorites.category}
                            prayerInput={favorites.text}
                            scriptures={favorites.scriptures}
                            />
                        )
                    })}
                </Grid>
            </div>
            </>
        );
}

export default Profile;