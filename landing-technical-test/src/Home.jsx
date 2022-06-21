import axios from 'axios';
import {useEffect, useState, useContext } from 'react';

function Home() {

    const { commits, setCommits} = useContext(CommitsContext);

    useEffect(() => {
        getCommits();
        }, []);

    //function to get the commit data
    const getCommits = async (info) => {
    try {
        const data = await axios.get(`http://localhost:3001/repository/commits`, info, {
        headers: {
            "Content-Type": "application/json",
        },
        });
        const pruebaMessages = getCommitsData(data.data);
        pruebaMessages.forEach( commitObject => commitObject.date = changeFormatDate(commitObject.date));
        setCommits(pruebaMessages);
    } catch (error) {
        console.log("There was an error. ", error.message);
        alert(error.message);
    }
    };

    //gets the values we want from the api data
    const getCommitsData = (pruebaArray = []) => {
    const valuesCommits = pruebaArray.map((x) => ({
        message:x?.commit?.message, 
        author:x?.author?.login,
        url:x?.html_url,
        date:x?.commit?.committer?.date, 
    }));

    return valuesCommits;
    };


    const changeFormatDate = (date) => {
        var dateChangedFormat = new Date(date);
        const fechaStirng = dateChangedFormat.toString(0,15);
        const x = fechaStirng.slice(0,34)
        return x;

    };
   
    



    
        return (
            <div>
            </div>
        )
    }
    
  export default Home
  
