import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext, useState} from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import './commentary.css';
import { Col, Row, Container} from 'react-bootstrap';
import Commentary from './Commentary.jsx'



function CommentaryComponent({commit, setCommits, setCurrentCommit, currentCommit, setShowComment}) {

    const [ comment, setComment ] = useState({
        text: "",
    })

    const onChange = ({ target }) => {
        setComment (target.value)
    }

    const addComment = () => {
        let items = commit;
        //we get the index of the array to add the comment
        let position = (items.length-1)-currentCommit;
        let item = {...items[position]};
        item.commentaries.push(comment);
        items[currentCommit] = item;
        setCommits (items);
        setShowComment(false);
        setCurrentCommit(null)
    }

   
   return (
    <div className="commentary__container">
           <Card className="commentary__card">
                 
                 <Card.Body className="commentary__card-body ">
                  <textarea 
                    className="commentary_textarea"
                    name="comment" 
                    id="" 
                    placeholder="Ingrese el nuevo comentario" 
                    value={comment.text} 
                    onChange={onChange} 
                    required
                  ></textarea>
                  <button className="btnAction" onClick={addComment}>Enviar</button>
                </Card.Body>
                 
             </Card>
            
    </div>
    

    
  );
}


export default CommentaryComponent;