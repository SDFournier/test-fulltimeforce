import axios from 'axios';
import {useEffect, useContext } from 'react';
import AccordionCommits from "./components/AccordionCommits.jsx";
import logoFTF from "./assets/fulltimeforce-logo.png"
import {CommitsContext} from './helpers/CommitsContext.jsx';

function Home() {
    // eslint-disable-next-line
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
        const valuesCommits = getCommitsData(data.data);
        valuesCommits.forEach( commitObject => commitObject.date = changeFormatDate(commitObject.date));
        setCommits(valuesCommits);
    } catch (error) {
        console.log("There was an error. ", error.message);
        alert(error.message);
    }
    };

    //gets the values we want from the api data
    const getCommitsData = (filteredCommits = []) => {
    const valuesCommits = filteredCommits.map((x) => ({
        message:x?.commit?.message, 
        author:x?.author?.login,
        url:x?.html_url,
        date:x?.commit?.committer?.date, 
        commentaries: []
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
                <div className='headerContainer'>
                    <img
                        className='logoFullTimeForce'
                        src={logoFTF}
                        alt='logo FullTimeForce'
                    />
                    <h1>Prueba Técnica</h1>
                </div>
                <div>
                    <AccordionCommits />
                </div>
            </div>
        )
    }
    
  export default Home
  
