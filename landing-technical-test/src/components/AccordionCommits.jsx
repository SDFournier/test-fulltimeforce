import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext, useState} from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {CommitsContext} from '../helpers/CommitsContext.jsx';
import './accordionCommits.css';
import { Col, Row, Container} from 'react-bootstrap';
import Commentary from './Commentary.jsx'


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

   // eslint-disable-next-line
    const { commits, setCommits } = useContext(CommitsContext);
    const [ showComment, setShowComment ] = useState(false)
    const [ currentCommit, setCurrentCommit ] = useState(false)

    const reversedCommits = commits.map(function iterateItems(item) {
    return item; 
    }).reverse();

    const onChange = (i)=> {
      setShowComment(!showComment);
      setCurrentCommit(i);
    }

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
                  <Container>
                    <Row>
                  <Col>
                    <ul>
                        <li>Author: {commit.author}</li>
                        <li>Date: {commit.date}</li>
                        <li>
                          <a href={commit.url} target="_blank" rel="noreferrer">
                            <button className="btnAction">Go to the commit in Github</button>
                          </a>  
                          {commit.commentaries?.map((comment, index) => (
                            <div key={index}>
                          <h1>{comment}</h1>
                          <button>hogfhgfh</button>
                            </div>
                          ))}
                        </li>
                        
                    </ul>
                    { !showComment && (currentCommit !== i) && <button className="btnAction"onClick={()=>{onChange(i)}}>Agregar Comentario</button>}
                    </Col>
                    {(currentCommit === i)&&( showComment  && <Col>
                    <Commentary currentCommit={currentCommit} setShowComment={setShowComment} setCommits={setCommits} commit={commits}/>
                    </Col>)}
                    </Row>
                    </Container>
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