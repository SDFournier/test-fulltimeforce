import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext} from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {CommitsContext} from './helpers/CommitsContext.jsx';
import './AccordionCommits.css';


function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
    <button
      className="buttonHeader"
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'rgba(170,170,200,0.7) ' : 'rgba(255,255,255,0.3) ' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
   
  
    
  </>
  );
}

function AccordionCommits() {

    const { commits, setCommits} = useContext(CommitsContext);

    const reversedCommits = commits.map(function iterateItems(item) {
    return item; 
    }).reverse();

   return (
    <div className="accordionsContainer">
        {reversedCommits?.map((commit, i) => (
         <div key={i}>
        
            <Accordion >
           <Card>
                <Card.Header >
                  <ContextAwareToggle eventKey={i+1} > #{i+1}: {commit.message}</ContextAwareToggle>
                </Card.Header>
                 <Accordion.Collapse eventKey={i+1}>
                 <Card.Body>
                    <ul>
                        <li>Author: {commit.author}</li>
                        <li>Date: {commit.date}</li>
                        <li>
                          <a href={commit.url} target="_blank" rel="noreferrer">
                            <button className="linkButton">Go to the commit in Github</button>
                          </a>  
                        </li>
                        
                    </ul>
                </Card.Body>
                 </Accordion.Collapse>
             </Card>
            
             </Accordion>
           </div>
    

         ))} 
    </div>
    
  );
}


export default AccordionCommits;