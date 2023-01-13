import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactModal = React.forwardRef((props,ref) => {
    console.log(ref);
    return (
        <div ref={ref} className=' modal-background'>
            <div onClick={() => false} className="modal">
                <button onClick={()=>{props.toggleClose()}} className="closebtn"><FontAwesomeIcon icon={faXmark} /></button>
                
                <div className="modal-content">
                    <p>Don't hesitate to contact me using one of these tools</p>
                    <div className="modal-icons">
                        <a href="https://www.linkedin.com/in/lyesramdane/"><FontAwesomeIcon className="faIcon" icon={faLinkedin} /></a>
                        <a href="mailto:ramdanelyes96@gmail.com" ><FontAwesomeIcon className="faIcon" icon={faEnvelope} /></a>
                        <a href="https://github.com/dablusLyes"><FontAwesomeIcon className="faIcon" icon={faGithub} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default ContactModal;
